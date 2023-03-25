import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { Params} from "@remix-run/react";
import { useParams} from "@remix-run/react";
import { useSearchParams} from "@remix-run/react";
import { Link} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { S3Client, ListObjectsV2Command, GetBucketLocationCommand } from "@aws-sdk/client-s3";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatBytes, getObjectKeyFileName } from "~/helpers";
import Breadcrumb from "~/components/Breadcrumb";

const getBucketName = (params: Params) => {
  const { bucketName } = params;
  if (typeof bucketName !== 'string' || bucketName === '') {
    throw new Error('No bucket name provided');
  }
  return bucketName;
}

type DataItem = {
  type: 'folder';
  name: string;
  prefix: string;
  region: string;
} | {
  type: 'file';
  key: string;
  name: string;
  lastModified: string;
  size: number;
  storageClass: string;
  bucketName: string;
  region: string;
}

const columns: ColumnsType<DataItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => record.type === 'file'
    ? (
      <Link to={`/object/${record.bucketName}?region=${encodeURIComponent(record.region)}&prefix=${encodeURIComponent(record.key)}`}>
        {record.name}
      </Link>
    ) : (
      <Link to={`?region=${encodeURIComponent(record.region)}&prefix=${record.prefix}`}>
        {record.name}
      </Link>
    )
  },
  {
    title: 'Last modified',
    dataIndex: 'lastModified',
    key: 'lastModified',
    render: (value) => value ?? '-',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: (_, item) => item.type === 'file'
      ? formatBytes(item.size)
      : '-',
  },
]

export const meta: MetaFunction<typeof loader> = ({ params }) => ({
  title: getBucketName(params),
});

export const loader = async ({ params, request }: LoaderArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("prefix") ?? '';
  const queryParamRegion = url.searchParams.get('region');
  const bucketName = getBucketName(params);

  const bucketRegion = await (async () => {
    if (queryParamRegion) return queryParamRegion;
    const locationResponse = await new S3Client({ region: 'us-east-1' }).send(new GetBucketLocationCommand({
      Bucket: bucketName,
    }));
    return locationResponse.LocationConstraint ?? 'us-east-1';
  })();

  const response = await new S3Client({ region: bucketRegion }).send(new ListObjectsV2Command({
    Bucket: bucketName,
    MaxKeys: 100,
    Delimiter: "/",
    EncodingType: "url",
    FetchOwner: true,
    Prefix: query,
  }));

  return json({
    response,
    bucketRegion,
  });
};

export default function Bucket() {
  const params = useParams();
  const bucketName = getBucketName(params);
  const { response, bucketRegion } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const bucketPrefix = searchParams.get('prefix') ?? '';
  const parts = bucketPrefix.split('/');
  if (parts.at(-1) === '') parts.pop();
  console.log({ bucketPrefix, parts });

  return (
    <main>
      <h1>Buckets</h1>
      <Breadcrumb bucket={{ name: bucketName, region: bucketRegion }} prefix={bucketPrefix} />
      <Table
        columns={columns}
        dataSource={[
          ...(response.CommonPrefixes ?? []).map<DataItem>(({ Prefix: prefix = '' }) => ({
            type: 'folder',
            name: (prefix ?? '').split('/').at(-2) ?? '',
            prefix,
            region: bucketRegion,
          })),
          ...(response.Contents ?? []).map<DataItem>(({ Key: key = '', Size: size, LastModified: lastModified, StorageClass: storageClass }) => ({
            type: 'file',
            key,
            name: getObjectKeyFileName(key),
            lastModified: lastModified ?? '',
            size: size ?? 0,
            storageClass: storageClass ?? '',
            bucketName,
            region: bucketRegion,
          })),
        ]}
      />
    </main>
  );
}
