import { useFragment, useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Card, Descriptions, Skeleton, Table, Typography } from 'antd';
import ObjectMetadataTable, {
  ObjectMetadataTableLoading,
} from './ObjectMetadataTable';
import ObjectTagsTable, { ObjectTagsTableLoading } from './ObjectTagsTable';
import { formatBytes } from '../helpers';
import { ObjectPropertiesObject_bucket$key } from '../__generated__/ObjectPropertiesObject_bucket.graphql';
import { ReactNode, Suspense } from 'react';
import { ObjectPropertiesQuery } from '../__generated__/ObjectPropertiesQuery.graphql';

type ObjectDescriptionsProps = {
  objectKey: string;
  etag: ReactNode;
  size: ReactNode;
  storageClass: ReactNode;
  lastModified: ReactNode;
};

function ObjectDescriptions(object: ObjectDescriptionsProps) {
  return (
    <div style={{ paddingTop: 24, paddingBottom: 24 }}>
      <Card>
        <Descriptions>
          <Descriptions.Item label="Key">{object.objectKey}</Descriptions.Item>
          <Descriptions.Item label="ETag">{object.etag}</Descriptions.Item>
          <Descriptions.Item label="Size">{object.size}</Descriptions.Item>
          <Descriptions.Item label="Storage class">
            {object.storageClass}
          </Descriptions.Item>
          <Descriptions.Item label="Last modified">
            {object.lastModified}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

type Props = {
  bucketName: string;
  objectKey: string;
};

function Inner({
  objectKey,
  bucket,
}: Props & { bucket: ObjectPropertiesObject_bucket$key | null }) {
  const objectBucket = useFragment<ObjectPropertiesObject_bucket$key>(
    graphql`
      fragment ObjectPropertiesObject_bucket on Bucket {
        object(objectKey: $objectKey) {
          key
          etag
          size
          storageClass
          lastModified
          ...ObjectTagsTable_object @defer
          ...ObjectMetadataTable_object @defer
        }
      }
    `,
    bucket
  );

  if (!objectBucket || !objectBucket.object)
    return (
      <div>
        Key <code>{objectKey}</code> not found
      </div>
    );

  const { object } = objectBucket;

  return (
    <>
      <ObjectDescriptions
        objectKey={object.key}
        etag={object.etag}
        size={formatBytes(object.size)}
        storageClass={object.storageClass}
        lastModified={object.lastModified}
      />
      <section>
        <Typography.Title level={3}>Tags</Typography.Title>
        <Suspense fallback={<ObjectTagsTableLoading />}>
          <ObjectTagsTable object={object} />
        </Suspense>
      </section>
      <section>
        <Typography.Title level={3}>Metadata</Typography.Title>
        <Suspense fallback={<ObjectMetadataTableLoading />}>
          <ObjectMetadataTable object={object} />
        </Suspense>
      </section>
    </>
  );
}

export default function ObjectProperties({ bucketName, objectKey }: Props) {
  const { bucket } = useLazyLoadQuery<ObjectPropertiesQuery>(
    graphql`
      query ObjectPropertiesQuery($bucketName: String!, $objectKey: String!) {
        bucket(name: $bucketName) {
          name
          region
          ...ObjectPropertiesObject_bucket @defer
        }
      }
    `,
    { bucketName, objectKey }
  );

  return (
    <>
      <Suspense
        fallback={
          <ObjectDescriptions
            objectKey={objectKey}
            size={
              <Skeleton
                title={{ style: { margin: 0, height: 18 } }}
                paragraph={{ rows: 0, style: { margin: 0 } }}
                style={{}}
              />
            }
            etag={
              <Skeleton
                title={{ style: { margin: 0, height: 18 } }}
                paragraph={{ rows: 0, style: { margin: 0 } }}
                style={{}}
              />
            }
            storageClass={
              <Skeleton
                title={{ style: { margin: 0, height: 18 } }}
                paragraph={{ rows: 0, style: { margin: 0 } }}
                style={{}}
              />
            }
            lastModified={
              <Skeleton
                title={{ style: { margin: 0, height: 18 } }}
                paragraph={{ rows: 0, style: { margin: 0 } }}
                style={{}}
              />
            }
          />
        }
      >
        <Inner bucket={bucket} bucketName={bucketName} objectKey={objectKey} />
      </Suspense>
    </>
  );
}
