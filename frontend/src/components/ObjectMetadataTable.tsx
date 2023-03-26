import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useFragment } from 'react-relay';
import {
  ObjectMetadataTable_object$data,
  ObjectMetadataTable_object$key,
} from '../__generated__/ObjectMetadataTable_object.graphql';

type Props = {
  object: ObjectMetadataTable_object$key;
};

type DataItem = ObjectMetadataTable_object$data['metadata'][number];

const columns: ColumnsType<DataItem> = [
  {
    title: 'Type',
    dataIndex: 'userDefined',
    key: 'userDefined',
    render: (_, { userDefined }) =>
      userDefined ? 'User defined' : 'System defined',
  },
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

export default function ObjectMetadataTable({ object }: Props) {
  const { metadata } = useFragment(
    graphql`
      fragment ObjectMetadataTable_object on BucketObject {
        metadata {
          key
          value
          userDefined
        }
      }
    `,
    object
  );

  return (
    <section>
      <Typography.Title level={3}>Metadata</Typography.Title>
      <Table
        size="small"
        columns={columns}
        dataSource={metadata}
        pagination={false}
      />
    </section>
  );
}
