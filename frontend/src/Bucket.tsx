import { Typography, Tabs } from 'antd';
import { FolderOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Suspense } from 'react';
import { Outlet, useParams, useMatch, useNavigate } from 'react-router-dom';
import PageLoading from './components/PageLoading';

export default function Bucket() {
  const { bucketName } = useParams<'bucketName'>();
  if (!bucketName) throw new Error('Missing required param bucketName');
  const navigate = useNavigate();

  const match = useMatch('/bucket/:bucketName/browser');
  const isBrowser = match !== null;
  const activeKey = isBrowser ? 'browser' : 'list';

  return (
    <>
      <Typography.Title>{bucketName}</Typography.Title>
      <Tabs
        items={[
          {
            label: (
              <span>
                <FolderOutlined /> Browser
              </span>
            ),
            key: 'browser',
          },
          {
            label: (
              <span>
                <UnorderedListOutlined /> List
              </span>
            ),
            key: 'list',
          },
        ]}
        activeKey={activeKey}
        onChange={(value) => {
          if (value === activeKey) return;
          switch (value) {
            case 'list':
              return navigate(`/bucket/${bucketName}`, { relative: 'route' });
            case 'browser':
              return navigate(`/bucket/${bucketName}/browser`, {
                relative: 'route',
              });
            default:
              return;
          }
        }}
      />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
