import { Typography } from 'antd';
import { useRouteError } from 'react-router';
import { BucketNotFoundError, ObjectNotFoundError } from '../errors';

export default function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof BucketNotFoundError) {
    return (
      <Typography.Title>{`Bucket not found: ${error.bucketName}`}</Typography.Title>
    );
  }

  if (error instanceof ObjectNotFoundError) {
    return (
      <Typography.Title>{`Object not found: ${error.objectKey}`}</Typography.Title>
    );
  }

  if (error instanceof Error) {
    return (
      <Typography.Title>{`Unexpected error: ${error.message}`}</Typography.Title>
    );
  }

  return <Typography.Title>Oops, something went wrong</Typography.Title>;
}
