import { Text, useFocus } from 'ink';
import { graphql, useLazyLoadQuery } from 'react-relay';
import FocusAwareSelect from '../FocusAwareSelect.js';
import { useProfileName } from '../profile.js';
import { BucketObjectsListQuery } from '../__generated__/BucketObjectsListQuery.graphql.js';

type Props = {
  bucketName: string;
};

export default function BucketObjectsList({ bucketName }: Props) {
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
            objects {
              key
              etag
              size
              storageClass
              lastModified
            }
          }
        }
      }
    `,
    { profileName, bucketName }
  );

  const { isFocused } = useFocus({
    autoFocus: true,
    isActive: (bucket?.objects.length ?? 0) > 0,
  });

  if (bucket === null) throw new Error('Bucket not found');

  if (bucket.objects.length === 0) {
    return <Text>Empty</Text>;
  }

  return (
    <FocusAwareSelect
      isFocused={isFocused}
      items={bucket.objects.map((object) => ({
        label: object.key,
        value: object,
        key: object.key,
      }))}
    />
  );
}
