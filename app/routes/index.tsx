import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
import { Card, Descriptions, Table } from 'antd';
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import type { ColumnsType } from "antd/es/table";

export const loader = async () => {
  const stsClient = new STSClient({});
  const s3Client = new S3Client({});
  const [bucket, caller] = await Promise.all([
    s3Client.send(new ListBucketsCommand({})),
    stsClient.send(new GetCallerIdentityCommand({})),
  ]);
  return json({ caller, bucket });
};

type DataItem = {
  name: string;
  createdAt: string;
}

const columns: ColumnsType<DataItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <Link to={`buckets/${record.name}`}>
        {record.name}
      </Link>
    ),
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
  }
];

export default function Index() {
  const { caller, bucket } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Card title="STS Credentials">
        <Descriptions title="Credentials">
          <Descriptions.Item label="Account">
            {caller.Account}
          </Descriptions.Item>
          <Descriptions.Item label="Arn">
            {caller.Arn}
          </Descriptions.Item>
          <Descriptions.Item label="UserId">
            {caller.UserId}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Table
        columns={columns}
        dataSource={(bucket.Buckets ?? []).map(({ Name = '', CreationDate = '' }) => ({
          name: Name,
          createdAt: CreationDate, 
        }))}
      />
    </div>
  );
}
