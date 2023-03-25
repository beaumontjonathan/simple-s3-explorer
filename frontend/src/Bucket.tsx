import { Link, useParams } from 'react-router-dom';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketQuery } from './__generated__/BucketQuery.graphql';

export default function Bucket() {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');

  const { bucket } = useLazyLoadQuery<BucketQuery>(
    graphql`
      query BucketQuery($bucketName: String!) {
        bucket(name: $bucketName) {
          name
          region
          objects {
            key
            etag
            size
            storageClass
            lastModified
          }
        }
      }
    `,
    { bucketName }
  );

  if (bucket === null) {
    return (
      <main>
        <h1>
          Bucket <code>{bucketName}</code> not found
        </h1>
      </main>
    );
  }

  return (
    <div>
      {bucket.name} {bucket.region}
      <ul>
        {bucket.objects.map((object) => (
          <li key={object.key}>
            <Link
              to={`/object/${bucket.name}?objectKey=${encodeURIComponent(
                object.key
              )}`}
            >
              {object.key} {object.etag} {object.storageClass} {object.size}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
