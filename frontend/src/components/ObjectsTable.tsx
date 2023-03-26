import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useFragment } from 'react-relay';
import { createSearchParams, Link } from 'react-router-dom';
import {
  formatBytes,
  useWithProfileNameParam,
  WithProfileNameParam,
} from '../helpers';
import {
  ObjectsTable_bucket$data,
  ObjectsTable_bucket$key,
} from '../__generated__/ObjectsTable_bucket.graphql';

type Props = {
  bucket: ObjectsTable_bucket$key;
};

type DataItem = ObjectsTable_bucket$data['objects'][number];

const columns = (
  bucketName: string,
  withProfileNameParam: WithProfileNameParam
): ColumnsType<DataItem> => [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: (_, object) => (
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
        {object.key}
      </Link>
    ),
  },
  {
    title: 'ETag',
    dataIndex: 'etag',
    key: 'etag',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: (_, object) => formatBytes(object.size),
  },
  {
    title: 'Storage class',
    dataIndex: 'storageClass',
    key: 'storageClass',
  },
  {
    title: 'Last modified',
    dataIndex: 'lastModified',
    key: 'lastModified',
  },
];

export default function ObjectsTable({ bucket }: Props) {
  const withProfileNameParam = useWithProfileNameParam();
  const { name: bucketName, objects } = useFragment(
    graphql`
      fragment ObjectsTable_bucket on Bucket {
        name
        objects {
          key
          etag
          size
          storageClass
          lastModified
        }
      }
    `,
    bucket
  );

  return (
    <Table
      size="small"
      columns={columns(bucketName, withProfileNameParam)}
      dataSource={objects}
      pagination={false}
    />
  );
}

type ObjectsTableLoadingProps = {
  bucketName: string;
};

export function ObjectsTableLoading({ bucketName }: ObjectsTableLoadingProps) {
  const withProfileNameParam = useWithProfileNameParam();
  return (
    <Table
      size="small"
      columns={columns(bucketName, withProfileNameParam)}
      pagination={false}
      loading
    />
  );
}
