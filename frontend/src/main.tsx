import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { environment } from './relay';
import './index.css';
import Buckets, { BucketsLoading } from './Buckets';
import Bucket from './Bucket';
import BucketObject from './BucketObject';
import Breadcrumb from './components/Breadcrumb';
import PageLoading from './components/PageLoading';
import BucketObjectsList, {
  BucketObjectsListLoading,
} from './BucketObjectsList';
import BucketObjectsBrowser, {
  BucketObjectsBrowserLoading,
} from './BucketObjectsBrowser';
import ErrorBoundary from './components/ErrorBoundary';
import ProfilePicker from './components/ProfilePicker';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary,
    element: (
      <>
        <div
          style={{
            position: 'sticky',
            top: 0,
            padding: '4px 0',
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Breadcrumb />
          <ProfilePicker />
        </div>
        <div style={{ paddingRight: 24, paddingLeft: 24 }}>
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<BucketsLoading />}>
            <Buckets />
          </Suspense>
        ),
      },
      {
        path: '/bucket/:bucketName',
        element: <Bucket />,
        ErrorBoundary,
        children: [
          {
            path: '/bucket/:bucketName',
            element: (
              <Suspense fallback={<BucketObjectsListLoading />}>
                <BucketObjectsList />
              </Suspense>
            ),
          },
          {
            path: '/bucket/:bucketName/browser',
            element: (
              <Suspense fallback={<BucketObjectsBrowserLoading />}>
                <BucketObjectsBrowser />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/object/:bucketName',
        element: <BucketObject />,
        ErrorBoundary,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
