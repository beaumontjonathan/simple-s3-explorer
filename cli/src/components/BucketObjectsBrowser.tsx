import { Text, useFocus } from 'ink';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import FocusAwareSelect from '../FocusAwareSelect.js';
import { useNavigate } from '../navigator.js';
import { useProfileName } from '../profile.js';
import { BucketObjectsBrowserQuery } from '../__generated__/BucketObjectsBrowserQuery.graphql.js';

type Props = {
  bucketName: string;
  prefix: string;
};

type Prefix = NonNullable<
  NonNullable<
    BucketObjectsBrowserQuery['response']['profile']['bucket']
  >['prefix']
>;
type Item = Prefix['commonPrefixes'][number] | Prefix['objects'][number];

export default function BucketObjectsBrowser({ bucketName, prefix }: Props) {
  const profileName = useProfileName();
  const navigate = useNavigate();
  const { isFocused } = useFocus();
  const {
    profile: { bucket },
  } = useLazyLoadQuery<BucketObjectsBrowserQuery>(
    graphql`
      query BucketObjectsBrowserQuery(
        $profileName: String!
        $bucketName: String!
        $prefix: String!
      ) {
        profile(name: $profileName) @required(action: THROW) {
          bucket(name: $bucketName) {
            prefix(prefix: $prefix) {
              commonPrefixes {
                __typename
                prefix
              }
              objects {
                __typename
                key
                etag
                size
                storageClass
                lastModified
              }
            }
          }
        }
      }
    `,
    {
      profileName,
      bucketName,
      prefix,
    }
  );

  if (!bucket || !bucket.prefix) throw new Error('Bucket not found');

  return (
    <Suspense>
      <FocusAwareSelect<Item>
        isFocused={isFocused}
        onSelect={(item) => {
          switch (item.value.__typename) {
            case 'BucketCommonPrefix':
              navigate({
                type: 'bucket',
                bucketName,
                tab: 'browser',
                prefix: item.value.prefix,
              });
              return;
            case 'ListedBucketObject':
              return;
          }
        }}
        items={[
          ...bucket.prefix.commonPrefixes.map((commonPrefix) => ({
            label: commonPrefix.prefix.replace(prefix, ''),
            value: commonPrefix,
            key: commonPrefix.prefix,
          })),
          ...bucket.prefix.objects.map((object) => ({
            label: object.key.replace(prefix, ''),
            value: object,
            key: object.key,
          })),
        ]}
      />
    </Suspense>
  );
}
