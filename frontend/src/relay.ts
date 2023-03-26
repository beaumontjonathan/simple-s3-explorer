import {
  RequestParameters,
  Variables,
  GraphQLResponse,
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  Observable,
} from 'relay-runtime';
import parseHeaders from 'parse-headers';
import { DeepMerger } from './deep-merger';

async function fetchQuery(
  params: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      queryId: params.id,
      variables,
    }),
  });

  return response.json();
}

type MultipartResponse = {
  type: 'initial' | 'subsequent';
  data: any;
  hasNext: boolean;
};

const parseMultipartResponse = (
  chunk: ReadableStreamReadResult<Uint8Array>
): MultipartResponse => {
  if (!chunk.value) throw new Error('Should have been closed by now');
  const foo = new TextDecoder().decode(chunk.value);
  const json = foo.split('\r\n\r\n').pop()?.split('\r\n')[0];
  console.log('parsing', json);
  const parsed = JSON.parse(json!);
  console.log(parsed);
  const hasNext =
    'hasNext' in parsed &&
    typeof parsed.hasNext === 'boolean' &&
    parsed.hasNext;
  if ('data' in parsed) return { type: 'initial', data: parsed.data, hasNext };

  return { type: 'subsequent', data: parsed.incremental, hasNext };
};

const merge = (initial: any, incoming: any): any => {
  let mergedData = initial;
  const merger = new DeepMerger();
  // @ts-ignore
  incoming.forEach(({ data, path }) => {
    for (let i = path.length - 1; i >= 0; --i) {
      const key = path[i];
      const isNumericKey = !isNaN(+key);
      const parent = isNumericKey ? [] : {};
      // @ts-ignore
      parent[key] = data;
      data = parent;
    }
    mergedData = merger.merge(mergedData, data);
  });
  return mergedData;
};

const fetchFn: FetchFunction = (request, variables) => {
  return Observable.create((source) => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: request.text,
        queryId: request.id,
        variables,
      }),
    })
      .then(async (res) => {
        const contentType = res.headers.get('content-type');
        console.log({ contentType });
        let current: any = null;

        if (contentType?.includes('multipart/mixed')) {
          // throw new Error('Unable to handle multi-part responses');
          if (!res.body) throw new Error('No body');
          const reader = res.body.getReader();
          // let chunk = await reader.read();
          do {
            const chunk = await reader.read();
            if (chunk.done) break;

            console.log('new chunk', chunk);
            const res = parseMultipartResponse(chunk);
            console.log(res);
            if (res.type === 'initial') {
              if (current !== null) throw new Error('Cannot get initial twice');
              current = res.data;
              console.log('chunk', current);
              source.next({ data: current });
            } else {
              if (current === null) throw new Error('Initial not set');
              current = merge(current, res.data);
              console.log('Merged', current);
              res.data.forEach((item) => source.next(item));
              // source.next({ data: current });
              // data, label, path
              // 'useIsParentQueryActiveTestUserDeferQuery$defer$useIsParentQueryActiveTestUserFragment',
            }
            if (!res.hasNext) {
              source.complete();
            }
          } while (true);
          // for (const chunk ) {

          return Promise.resolve();
          // throw new Error('done');
          // }
        }

        // Simple JSON
        return res.json().then((data) => {
          console.log('json', data);
          source.next(data);
          source.complete();
        });
      })
      .catch((error) => source.error(error));
  });
};

export const environment = new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
