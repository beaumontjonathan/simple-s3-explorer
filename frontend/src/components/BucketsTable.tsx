import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useFragment } from 'react-relay';
import { Link } from 'react-router-dom';
import {
  BucketsTable_query$data,
  BucketsTable_query$key,
} from '../__generated__/BucketsTable_query.graphql';

type Props = {
  query: BucketsTable_query$key;
};

type DataItem = BucketsTable_query$data['buckets'][number];

const columns: ColumnsType<DataItem> = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: (_, bucket) => (
      <Link to={`/bucket/${bucket.name}/browser`}>{bucket.name}</Link>
    ),
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

export default function BucketsTable({ query }: Props) {
  const { buckets } = useFragment(
    graphql`
      fragment BucketsTable_query on Query {
        buckets {
          name
          createdAt
        }
      }
    `,
    query
  );

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={buckets}
      // pagination={false}
    />
  );
}

export function BucketsTableLoading() {
  return (
    <Table
      size="small"
      columns={columns}
      loading
      // pagination={false}
    />
  );
}
