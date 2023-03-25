import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { environment } from './relay';
import './index.css';
import Buckets from './Buckets';
import Bucket from './Bucket';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback="Loading...">
        <Buckets />
      </Suspense>
    ),
  },
  {
    path: '/bucket/:bucketName',
    element: (
      <Suspense fallback="Loading...">
        <Bucket />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
