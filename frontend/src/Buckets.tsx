import { graphql, useLazyLoadQuery, useFragment } from 'react-relay';
import { BucketsQuery } from './__generated__/BucketsQuery.graphql';
import { Buckets_query$key } from './__generated__/Buckets_query.graphql';

export default function Buckets() {
  const query = useLazyLoadQuery<BucketsQuery>(graphql`
    query BucketsQuery {
      ...Buckets_query
    }
  `, {});

  const { buckets } = useFragment<Buckets_query$key>(graphql`
    fragment Buckets_query on Query {
      buckets {
        name
      }
    }
  `, query)

  return (
    <div>
      <h1>Simple S3 Explorer</h1>
      <ul>
        {buckets.map((bucket) => (
          <li key={bucket.name}>
            {bucket.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
