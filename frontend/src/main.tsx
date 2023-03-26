import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { environment } from './relay';
import './index.css';
import Buckets from './Buckets';
import Bucket from './Bucket';
import BucketObject from './BucketObject';
import Breadcrumb from './components/Breadcrumb';
import PageLoading from './components/PageLoading';
import BucketObjectsList from './BucketObjectsList';
import BucketObjectsBrowser from './BucketObjectsBrowser';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Breadcrumb />
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
        element: <Buckets />,
      },
      {
        path: '/bucket/:bucketName',
        element: <Bucket />,
        children: [
          {
            path: '/bucket/:bucketName',
            element: <BucketObjectsList />,
          },
          {
            path: '/bucket/:bucketName/browser',
            element: <BucketObjectsBrowser />,
          },
        ],
      },
      {
        path: '/object/:bucketName',
        element: <BucketObject />,
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
