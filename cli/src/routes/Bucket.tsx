import { Text, useFocus } from 'ink';
import { Suspense } from 'react';
import BucketObjectsBrowser from '../components/BucketObjectsBrowser.js';
import BucketObjectsList from '../components/BucketObjectsList.js';
import Loading from '../components/Loading.js';
import Tabs from '../components/Tabs.js';
import { useNavigate } from '../navigator.js';
import { useProfileName } from '../profile.js';

export type BucketPage = {
  type: 'bucket';
  bucketName: string;
} & ({ tab: 'browser'; prefix: string } | { tab: 'objects' });

type Props = {
  page: BucketPage;
};

export default function Bucket({ page }: Props) {
  const navigate = useNavigate();

  return (
    <Tabs
      activeItemKey={page.tab}
      onItemChange={(item) => {
        switch (item.key) {
          case 'browser':
            navigate(
              {
                type: 'bucket',
                bucketName: page.bucketName,
                tab: 'browser',
                prefix: '',
              },
              { replace: true }
            );
            break;
          case 'objects':
            navigate(
              {
                type: 'bucket',
                bucketName: page.bucketName,
                tab: 'objects',
              },
              { replace: true }
            );
            break;
          default:
            throw new Error('Unknown tab');
        }
      }}
      items={[
        {
          label: 'browser',
          key: 'browser',
          value: '',
          render: () => (
            <>
              <Text>{page.tab === 'objects' ? '' : page.prefix || '/'}</Text>
              <Suspense fallback={<Loading title="Loading objects..." />}>
                <BucketObjectsBrowser
                  prefix={page.tab === 'browser' ? page.prefix : ''}
                  bucketName={page.bucketName}
                />
              </Suspense>
            </>
          ),
        },
        {
          label: 'objects',
          key: 'objects',
          value: '',
          render: () => (
            <Suspense fallback={<Loading title="Loading objects..." />}>
              <BucketObjectsList bucketName={page.bucketName} />
            </Suspense>
          ),
        },
      ]}
    />
  );
}
