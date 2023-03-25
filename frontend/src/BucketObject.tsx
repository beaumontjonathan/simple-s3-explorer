import { useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { BucketObjectQuery } from './__generated__/BucketObjectQuery.graphql';

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
    <div>
      <div>{bucket.name}</div>
      <div>{object.key}</div>
      <div>{object.etag}</div>
      <div>{object.size}</div>
      <div>{object.storageClass}</div>
      <div>{object.lastModified}</div>
    </div>
  );
}
