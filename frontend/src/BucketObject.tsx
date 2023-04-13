import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Typography } from 'antd';
import ObjectDownloadButton from './components/ObjectDownloadButton';
import ObjectProperties, {
  ObjectPropertiesLoading,
} from './components/ObjectProperties';
import { Suspense } from 'react';
import PageLoading from './components/PageLoading';

export default function BucketObject() {
  const { bucketName } = useParams<'bucketName'>();
  if (typeof bucketName !== 'string')
    throw new Error('Missing bucketName query parameter');

  const [searchParams] = useSearchParams();
  const objectKeyEncoded = searchParams.get('objectKey');
  if (objectKeyEncoded === null)
    throw new Error('Missing objectKey search parameter');

  const objectKey = decodeURIComponent(objectKeyEncoded);

  const title = <Typography.Title>{objectKey}</Typography.Title>;

  return (
    <>
      <Suspense
        fallback={
          <>
            {title}
            <PageLoading />
          </>
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {title}
          <ObjectDownloadButton bucketName={bucketName} objectKey={objectKey} />
        </div>
        <Suspense fallback={<ObjectPropertiesLoading objectKey={objectKey} />}>
          <ObjectProperties bucketName={bucketName} objectKey={objectKey} />
        </Suspense>
      </Suspense>
    </>
  );
}
