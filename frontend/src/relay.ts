import {
  RequestParameters,
  Variables,
  GraphQLResponse,
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

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

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
