import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { graphql, useFragment } from 'react-relay';
import { Link, createSearchParams } from 'react-router-dom';
import { useWithProfileNameParam, WithProfileNameParam } from '../helpers';
import {
  BucketsTable_query$data,
  BucketsTable_query$key,
} from '../__generated__/BucketsTable_query.graphql';

type Props = {
  query: BucketsTable_query$key;
};

type DataItem = BucketsTable_query$data['profile']['buckets'][number];

const columns = (
  withProfileNameParam: WithProfileNameParam
): ColumnsType<DataItem> => [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: (_, bucket) => (
      <Link
        to={{
          pathname: `/bucket/${bucket.name}/browser`,
          search: createSearchParams(withProfileNameParam({})).toString(),
        }}
      >
        {bucket.name}
      </Link>
    ),
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

export default function BucketsTable({ query }: Props) {
  const withProfileNameParam = useWithProfileNameParam();
  const {
    profile: { buckets },
  } = useFragment(
    graphql`
      fragment BucketsTable_query on Query {
        profile(name: $profileName) @required(action: THROW) {
          buckets {
            name
            createdAt
          }
        }
      }
    `,
    query
  );

  return (
    <Table
      size="small"
      columns={columns(withProfileNameParam)}
      dataSource={buckets}
      // pagination={false}
    />
  );
}

export function BucketsTableLoading() {
  const withProfileNameParam = useWithProfileNameParam();
  return (
    <Table
      size="small"
      columns={columns(withProfileNameParam)}
      loading
      // pagination={false}
    />
  );
}
