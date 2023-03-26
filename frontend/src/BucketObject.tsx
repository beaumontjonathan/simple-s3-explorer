import { useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { BucketObjectQuery } from './__generated__/BucketObjectQuery.graphql';
import { Card, Descriptions, Typography } from 'antd';
import ObjectMetadataTable from './components/ObjectMetadataTable';
import ObjectTagsTable from './components/ObjectTagsTable';
import ObjectDownloadButton from './components/ObjectDownloadButton';
import { formatBytes } from './helpers';

export default function BucketObject() {
  const { bucketName } = useParams<'bucketName'>();
  if (typeof bucketName !== 'string')
    throw new Error('Missing bucketName query parameter');

  const [searchParams] = useSearchParams();
  const objectKeyEncoded = searchParams.get('objectKey');
  if (objectKeyEncoded === null)
    throw new Error('Missing objectKey search parameter');

  const objectKey = decodeURIComponent(objectKeyEncoded);

  const { bucket } = useLazyLoadQuery<BucketObjectQuery>(
    graphql`
      query BucketObjectQuery($bucketName: String!, $objectKey: String!) {
        bucket(name: $bucketName) {
          name
          region
          object(objectKey: $objectKey) {
            key
            etag
            size
            storageClass
            lastModified
            ...ObjectTagsTable_object
            ...ObjectMetadataTable_object
          }
        }
      }
    `,
    { bucketName, objectKey }
  );

  if (!bucket)
    return (
      <div>
        Bucket <code>{bucketName}</code> not found
      </div>
    );
  if (!bucket.object)
    return (
      <div>
        Key <code>{objectKey}</code> not found
      </div>
    );

  const { object } = bucket;

  return (
    <>
      <Typography.Title>{objectKey}</Typography.Title>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <ObjectDownloadButton bucketName={bucketName} objectKey={objectKey} />
      </div>
      <div style={{ paddingTop: 24, paddingBottom: 24 }}>
        <Card>
          <Descriptions>
            <Descriptions.Item label="Key">{object.key}</Descriptions.Item>
            <Descriptions.Item label="ETag">{object.etag}</Descriptions.Item>
            <Descriptions.Item label="Size">
              {formatBytes(object.size)}
            </Descriptions.Item>
            <Descriptions.Item label="Storage class">
              {object.storageClass}
            </Descriptions.Item>
            <Descriptions.Item label="Last modified">
              {object.lastModified}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <ObjectTagsTable object={object} />
      <ObjectMetadataTable object={object} />
    </>
  );
}
