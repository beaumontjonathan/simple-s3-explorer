import { Typography } from 'antd';
import { graphql, useLazyLoadQuery } from 'react-relay';
import BucketsTable, { BucketsTableLoading } from './components/BucketsTable';
import { useProfileName } from './helpers';
import { BucketsQuery } from './__generated__/BucketsQuery.graphql';

export default function Buckets() {
  const profileName = useProfileName();
  const query = useLazyLoadQuery<BucketsQuery>(
    graphql`
      query BucketsQuery($profileName: String!) {
        ...BucketsTable_query
      }
    `,
    { profileName }
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
