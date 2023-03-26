import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useLazyLoadQuery } from 'react-relay';
import {
  BucketObjectsBrowserQuery,
  BucketObjectsBrowserQuery$data,
} from './__generated__/BucketObjectsBrowserQuery.graphql';
import { formatBytes } from './helpers';

type Prefix = NonNullable<
  NonNullable<BucketObjectsBrowserQuery$data['bucket']>['prefix']
>;
type DataItem = Prefix['commonPrefixes'][number] | Prefix['objects'][number];

const columns = (bucketName: string, prefix: string): ColumnsType<DataItem> => [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: (_, object) =>
      object.__typename === 'ListedBucketObject' ? (
        <Link
          to={`/object/${bucketName}?objectKey=${encodeURIComponent(
            object.key
          )}`}
        >
          {object.key.replace(prefix, '') || '.'}
        </Link>
      ) : (
        <Link to={`?prefix=${encodeURIComponent(object.prefix)}`}>
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

export default function BucketObjectsBrowser() {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');

  const [searchParams] = useSearchParams();
  const prefixEncoded = searchParams.get('prefix');
  const prefix =
    prefixEncoded === null ? '' : decodeURIComponent(prefixEncoded);

  const { bucket } = useLazyLoadQuery<BucketObjectsBrowserQuery>(
    graphql`
      query BucketObjectsBrowserQuery($bucketName: String!, $prefix: String!) {
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
    `,
    {
      bucketName,
      prefix,
    }
  );

  if (!bucket || !bucket.prefix) throw new Error('TODO');

  return (
    <Table
      pagination={false}
      columns={columns(bucketName, prefix)}
      dataSource={[...bucket.prefix.commonPrefixes, ...bucket.prefix.objects]}
    />
  );
  // return <div>hi there!</div>;
}
