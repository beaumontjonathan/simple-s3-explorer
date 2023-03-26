import { Typography, Tabs, Space } from 'antd';
import { FolderOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Suspense } from 'react';
import {
  Outlet,
  useParams,
  useMatch,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
import PageLoading from './components/PageLoading';
import { useWithProfileNameParam } from './helpers';

export default function Bucket() {
  const { bucketName } = useParams<'bucketName'>();
  const withProfileNameParam = useWithProfileNameParam();
  if (!bucketName) throw new Error('Missing required param bucketName');
  const navigate = useNavigate();

  const match = useMatch('/bucket/:bucketName/browser');
  const isBrowser = match !== null;
  const activeKey = isBrowser ? 'browser' : 'objects';

  return (
    <>
      <Typography.Title>{bucketName}</Typography.Title>
      <Tabs
        items={[
          {
            label: (
              <>
                <FolderOutlined />
                Browser
              </>
            ),
            key: 'browser',
          },
          {
            label: (
              <>
                <UnorderedListOutlined />
                Objects
              </>
            ),
            key: 'objects',
          },
        ]}
        activeKey={activeKey}
        onChange={(value) => {
          if (value === activeKey) return;
          switch (value) {
            case 'objects':
              return navigate(
                {
                  pathname: `/bucket/${bucketName}`,
                  search: createSearchParams(
                    withProfileNameParam({})
                  ).toString(),
                },
                { relative: 'route' }
              );
            case 'browser':
              return navigate(
                {
                  pathname: `/bucket/${bucketName}/browser`,
                  search: createSearchParams(
                    withProfileNameParam({})
                  ).toString(),
                },
                {
                  relative: 'route',
                }
              );
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
