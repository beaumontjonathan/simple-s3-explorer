import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketQuery } from './__generated__/BucketQuery.graphql';
import ObjectsTable from './components/ObjectsTable';

export default function Bucket() {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');

  const { bucket } = useLazyLoadQuery<BucketQuery>(
    graphql`
      query BucketQuery($bucketName: String!) {
        bucket(name: $bucketName) {
          name
          region
          ...ObjectsTable_bucket
        }
      }
    `,
    { bucketName }
  );

  if (bucket === null) {
    return (
      <main>
        <Typography.Title>
          Bucket <code>{bucketName}</code> not found
        </Typography.Title>
      </main>
    );
  }

  return (
    <>
      <Typography.Title>{bucketName}</Typography.Title>
      <ObjectsTable bucket={bucket} />
    </>
  );
}
