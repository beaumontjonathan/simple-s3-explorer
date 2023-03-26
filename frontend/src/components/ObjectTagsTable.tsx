import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useFragment } from 'react-relay';
import {
  ObjectTagsTable_object$data,
  ObjectTagsTable_object$key,
} from '../__generated__/ObjectTagsTable_object.graphql';

type Props = {
  object: ObjectTagsTable_object$key;
};

type DataItem = ObjectTagsTable_object$data['tags'][number];

const columns: ColumnsType<DataItem> = [
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

export default function ObjectTagsTable({ object }: Props) {
  const { tags } = useFragment(
    graphql`
      fragment ObjectTagsTable_object on BucketObject {
        tags {
          key
          value
        }
      }
    `,
    object
  );

  return (
    <section>
      <h3>Tags</h3>
      <Table
        size="small"
        columns={columns}
        dataSource={tags}
        pagination={false}
      />
    </section>
  );
}
