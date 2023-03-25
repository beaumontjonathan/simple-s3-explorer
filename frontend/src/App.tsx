import { Suspense, useState } from 'react';
import Buckets from './Buckets';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Buckets />
    </Suspense>
  );
}
