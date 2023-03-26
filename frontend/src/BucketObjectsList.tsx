import { useParams } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketObjectsListQuery } from './__generated__/BucketObjectsListQuery.graphql';
import ObjectsTable, { ObjectsTableLoading } from './components/ObjectsTable';

const useBucketName = () => {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');
  return bucketName;
};

export default function BucketObjectsList() {
  const bucketName = useBucketName();
  const { bucket } = useLazyLoadQuery<BucketObjectsListQuery>(
    graphql`
      query BucketObjectsListQuery($bucketName: String!) {
        bucket(name: $bucketName) {
          name
          region
          ...ObjectsTable_bucket
        }
      }
    `,
    { bucketName }
  );

  if (bucket === null) return <p>Not found</p>;

  return <ObjectsTable bucket={bucket} />;
}

export function BucketObjectsListLoading() {
  const bucketName = useBucketName();
  return <ObjectsTableLoading bucketName={bucketName} />;
}
