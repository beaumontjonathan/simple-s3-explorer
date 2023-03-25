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
            tags {
              key
              value
            }
            metadata {
              key
              value
              userDefined
            }
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
      {object.tags.length === 0 ? null : (
        <div>
          Tags
          <table>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            {object.tags.map((tag) => (
              <tr key={tag.key}>
                <td>{tag.key}</td>
                <td>{tag.value}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
      {object.metadata.length === 0 ? null : (
        <div>
          Metadata
          <table>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>Value</th>
            </tr>
            {object.metadata.map((data) => (
              <tr key={data.key}>
                <td>{data.userDefined ? 'User defined' : 'System defined'}</td>
                <td>{data.key}</td>
                <td>{data.value}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
