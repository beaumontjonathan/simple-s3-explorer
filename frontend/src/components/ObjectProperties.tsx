import { useFragment, useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Card, Descriptions, Typography } from 'antd';
import ObjectMetadataTable, {
  ObjectMetadataTableLoading,
} from './ObjectMetadataTable';
import ObjectTagsTable, { ObjectTagsTableLoading } from './ObjectTagsTable';
import { formatBytes, useProfileName } from '../helpers';
import { ObjectPropertiesObject_bucket$key } from '../__generated__/ObjectPropertiesObject_bucket.graphql';
import { PropsWithChildren, ReactNode, Suspense } from 'react';
import { ObjectPropertiesQuery } from '../__generated__/ObjectPropertiesQuery.graphql';
import SkeletonText from './SkeletonText';
import { ObjectNotFoundError } from '../errors';

function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section>
      <Typography.Title level={3}>{title}</Typography.Title>
      {children}
    </section>
  );
}

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
    throw new ObjectNotFoundError({ objectKey });

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
      <Section title="Tags">
        <Suspense fallback={<ObjectTagsTableLoading />}>
          <ObjectTagsTable object={object} />
        </Suspense>
      </Section>
      <Section title="Metadata">
        <Suspense fallback={<ObjectMetadataTableLoading />}>
          <ObjectMetadataTable object={object} />
        </Suspense>
      </Section>
    </>
  );
}

export default function ObjectProperties({ bucketName, objectKey }: Props) {
  const profileName = useProfileName();
  const {
    profile: { bucket },
  } = useLazyLoadQuery<ObjectPropertiesQuery>(
    graphql`
      query ObjectPropertiesQuery(
        $profileName: String!
        $bucketName: String!
        $objectKey: String!
      ) {
        profile(name: $profileName) @required(action: THROW) {
          bucket(name: $bucketName) {
            name
            region
            ...ObjectPropertiesObject_bucket @defer
          }
        }
      }
    `,
    { profileName, bucketName, objectKey }
  );

  return (
    <>
      <Suspense fallback={<ObjectPropertiesLoading objectKey={objectKey} />}>
        <Inner bucket={bucket} bucketName={bucketName} objectKey={objectKey} />
      </Suspense>
    </>
  );
}

export function ObjectPropertiesLoading({ objectKey }: { objectKey: string }) {
  return (
    <>
      <ObjectDescriptions
        objectKey={objectKey}
        size={<SkeletonText />}
        etag={<SkeletonText />}
        storageClass={<SkeletonText />}
        lastModified={<SkeletonText />}
      />
      <Section title="Tags">
        <ObjectTagsTableLoading />
      </Section>
      <Section title="Metadata">
        <ObjectMetadataTableLoading />
      </Section>
    </>
  );
}
