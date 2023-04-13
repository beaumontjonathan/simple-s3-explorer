import { Text } from 'ink';
import { Suspense } from 'react';
import BucketSelect from '../Buckets.js';
import { useNavigate, usePages } from '../navigator.js';
import Skeleton from '../components/Skeleton.js';
import { Home } from './Home.js';
import Loading from '../components/Loading.js';
import Bucket from './Bucket.js';
import Profile from './Profile.js';

export default function Routes() {
  const pages = usePages();
  const navigate = useNavigate();

  const page = pages.at(-1) ?? null;

  if (page === null) {
    return (
      <Skeleton title="Simple S3 Explorer">
        <Home />
      </Skeleton>
    );
  }

  switch (page.type) {
    case 'buckets':
      return (
        <Skeleton title="Select a bucket">
          <Suspense fallback={<Loading title="Loading buckets..." />}>
            <BucketSelect
              onChange={(value) =>
                navigate({
                  type: 'bucket',
                  bucketName: value.name,
                  tab: 'browser',
                  prefix: '',
                })
              }
            />
          </Suspense>
        </Skeleton>
      );
    case 'bucket':
      return (
        <Skeleton title={page.bucketName}>
          <Bucket page={page} />
        </Skeleton>
      );
    case 'profile':
      return (
        <Skeleton title="Profile">
          <Profile />
        </Skeleton>
      );
  }

  return <Text>Unknown</Text>;
}
