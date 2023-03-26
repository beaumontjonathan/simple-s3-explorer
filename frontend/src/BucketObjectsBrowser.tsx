import {
  Link,
  useParams,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useLazyLoadQuery } from 'react-relay';
import {
  BucketObjectsBrowserQuery,
  BucketObjectsBrowserQuery$data,
} from './__generated__/BucketObjectsBrowserQuery.graphql';
import {
  formatBytes,
  useProfileName,
  useWithProfileNameParam,
  WithProfileNameParam,
} from './helpers';
import { BucketNotFoundError } from './errors';

type Prefix = NonNullable<
  NonNullable<BucketObjectsBrowserQuery$data['profile']['bucket']>['prefix']
>;
type DataItem = Prefix['commonPrefixes'][number] | Prefix['objects'][number];

const columns = (
  bucketName: string,
  prefix: string,
  withProfileNameParam: WithProfileNameParam
): ColumnsType<DataItem> => [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: (_, object) =>
      object.__typename === 'ListedBucketObject' ? (
        <Link
          to={{
            pathname: `/object/${bucketName}`,
            search: createSearchParams(
              withProfileNameParam({
                objectKey: encodeURIComponent(object.key),
              })
            ).toString(),
          }}
        >
          {object.key.replace(prefix, '') || '.'}
        </Link>
      ) : (
        <Link
          to={{
            search: createSearchParams(
              withProfileNameParam({
                prefix: encodeURIComponent(object.prefix),
              })
            ).toString(),
          }}
        >
          {object.prefix.replace(prefix, '')}
        </Link>
      ),
  },
  {
    title: 'ETag',
    dataIndex: 'etag',
    key: 'etag',
    render: (value) => value ?? '-',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: (_, object) =>
      object.__typename !== 'ListedBucketObject'
        ? '-'
        : formatBytes(object.size),
  },
  {
    title: 'Storage class',
    dataIndex: 'storageClass',
    key: 'storageClass',
    render: (value) => value ?? '-',
  },
  {
    title: 'Last modified',
    dataIndex: 'lastModified',
    key: 'lastModified',
    render: (value) => value ?? '-',
  },
];

const useBucketNameAndPrefix = () => {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');

  const [searchParams] = useSearchParams();
  const prefixEncoded = searchParams.get('prefix');
  const prefix =
    prefixEncoded === null ? '' : decodeURIComponent(prefixEncoded);

  return { bucketName, prefix };
};

export default function BucketObjectsBrowser() {
  const profileName = useProfileName();
  const withProfileNameParam = useWithProfileNameParam();
  const { bucketName, prefix } = useBucketNameAndPrefix();
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

  if (!bucket || !bucket.prefix) throw new BucketNotFoundError({ bucketName });

  return (
    <Table
      pagination={false}
      columns={columns(bucketName, prefix, withProfileNameParam)}
      dataSource={[...bucket.prefix.commonPrefixes, ...bucket.prefix.objects]}
    />
  );
}

export function BucketObjectsBrowserLoading() {
  const withProfileNameParam = useWithProfileNameParam();
  const { bucketName, prefix } = useBucketNameAndPrefix();

  return (
    <Table
      pagination={false}
      columns={columns(bucketName, prefix, withProfileNameParam)}
      loading
    />
  );
}
