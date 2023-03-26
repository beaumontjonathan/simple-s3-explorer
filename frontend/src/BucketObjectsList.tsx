import { useParams } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketObjectsListQuery } from './__generated__/BucketObjectsListQuery.graphql';
import ObjectsTable from './components/ObjectsTable';

export default function BucketObjectsList() {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');

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
