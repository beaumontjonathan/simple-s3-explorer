import { useParams } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketObjectsListQuery } from './__generated__/BucketObjectsListQuery.graphql';
import ObjectsTable, { ObjectsTableLoading } from './components/ObjectsTable';
import { BucketNotFoundError } from './errors';
import { useProfileName } from './helpers';

const useBucketName = () => {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');
  return bucketName;
};

export default function BucketObjectsList() {
  const bucketName = useBucketName();
  const profileName = useProfileName();
  const {
    profile: { bucket },
  } = useLazyLoadQuery<BucketObjectsListQuery>(
    graphql`
      query BucketObjectsListQuery(
        $profileName: String!
        $bucketName: String!
      ) {
        profile(name: $profileName) @required(action: THROW) {
          bucket(name: $bucketName) {
            name
            region
            ...ObjectsTable_bucket
          }
        }
      }
    `,
    { profileName, bucketName }
  );

  if (bucket === null) throw new BucketNotFoundError({ bucketName });

  return <ObjectsTable bucket={bucket} />;
}

export function BucketObjectsListLoading() {
  const bucketName = useBucketName();
  return <ObjectsTableLoading bucketName={bucketName} />;
}
