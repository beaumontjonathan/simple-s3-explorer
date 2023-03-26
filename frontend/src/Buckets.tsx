import { Typography } from 'antd';
import { graphql, useLazyLoadQuery } from 'react-relay';
import BucketsTable, { BucketsTableLoading } from './components/BucketsTable';
import { BucketsQuery } from './__generated__/BucketsQuery.graphql';

export default function Buckets() {
  const query = useLazyLoadQuery<BucketsQuery>(
    graphql`
      query BucketsQuery {
        ...BucketsTable_query
      }
    `,
    {}
  );

  return (
    <>
      <Typography.Title>Simple S3 Explorer</Typography.Title>
      <BucketsTable query={query} />
    </>
  );
}

export function BucketsLoading() {
  return (
    <>
      <Typography.Title>Simple S3 Explorer</Typography.Title>
      <BucketsTableLoading />
    </>
  );
}
