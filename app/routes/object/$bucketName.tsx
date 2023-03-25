import { S3Client, ObjectAttributes, GetObjectAttributesCommand, GetObjectTaggingCommand } from "@aws-sdk/client-s3";
import type { ActionFunction, LoaderArgs, MetaFunction} from "@remix-run/node";
import { redirect,  } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { Params} from "@remix-run/react";
import { Form} from "@remix-run/react";
import { useLoaderData} from "@remix-run/react";
import { useSearchParams} from "@remix-run/react";
import { useParams } from "@remix-run/react";
import { DownloadOutlined } from '@ant-design/icons';
import { Card, Descriptions, Tag, Button } from 'antd';
import Breadcrumb from "~/components/Breadcrumb";
import { formatBytes, getObjectKeyFileName } from "~/helpers";

const getBucketName = (params: Params) => {
  const { bucketName } = params;
  if (typeof bucketName !== 'string' || bucketName === '') {
    throw new Error('No bucket name provided');
  }
  return bucketName;
}

export const action: ActionFunction = () => {
  return redirect('/');
}

export const meta: MetaFunction = ({ params }) => ({
  title: getBucketName(params),
});

export const loader = async ({ params, request }: LoaderArgs) => {
  const url = new URL(request.url);
  const bucketName = getBucketName(params);
  const region = url.searchParams.get('region');
  const prefixRaw = url.searchParams.get('prefix');
  if (!region || !prefixRaw) throw new Error('Missing');
  const prefix = decodeURIComponent(prefixRaw);
  const client = new S3Client({ region });
  console.log({ bucketName, region, prefix, prefixRaw })
  const [attributes, tagging] = await Promise.all([
    client.send(new GetObjectAttributesCommand({
      Bucket: bucketName,
      Key: prefix,
      ObjectAttributes: [
        ObjectAttributes.OBJECT_PARTS,
        ObjectAttributes.OBJECT_SIZE,
        ObjectAttributes.STORAGE_CLASS,
        ObjectAttributes.ETAG,
      ],
    })),
    client.send(new GetObjectTaggingCommand({
      Bucket: bucketName,
      Key: prefix,
    })),
  ]);

  return json({ attributes, tagging })
};

export default function Object() {
  const params = useParams();
  const { attributes, tagging } = useLoaderData<typeof loader>();
  const bucketName = getBucketName(params);
  const [searchParams] = useSearchParams();
  const objectPrefix = searchParams.get('prefix') ?? '';
  const region = searchParams.get('region') ?? 'us-east-1';
  return (
    <main>
      <h1><pre>{`${bucketName} - ${getObjectKeyFileName(objectPrefix)}`}</pre></h1>
      <Breadcrumb bucket={{ name: bucketName, region }} prefix={objectPrefix} />
      <Card>
        <Descriptions title="Object Info">
          <Descriptions.Item label="Storage class">{attributes.StorageClass}</Descriptions.Item>
          <Descriptions.Item label="ETag">{attributes.ETag}</Descriptions.Item>
          <Descriptions.Item label="Last modified">{attributes.LastModified}</Descriptions.Item>
          <Descriptions.Item label="Size">{typeof attributes.ObjectSize === 'number' ? formatBytes(attributes.ObjectSize) : undefined}</Descriptions.Item>
          <Descriptions.Item label="Tags"><>{(tagging.TagSet ?? []).map((tag) => <Tag key={tag.Key}>{`${tag.Key}: ${tag.Value}`}</Tag>)}</></Descriptions.Item>
        </Descriptions>
        <Form method="post">
          <Button
            icon={<DownloadOutlined />}
            htmlType="submit"
          >
            Download
          </Button>
        </Form>
      </Card>
    </main>
  )
}
