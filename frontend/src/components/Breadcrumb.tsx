import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export default function Breadcrumb() {
  const { bucketName } = useParams();
  const [searchParams] = useSearchParams();
  const objectKey = searchParams.get('objectKey');
  const hasBucketName = typeof bucketName === 'string';
  const hasObjectKey = typeof objectKey === 'string';

  const items = [
    {
      title: hasBucketName ? <Link to="/">S3 Buckets</Link> : 'S3 Buckets',
    },
  ];

  if (hasBucketName) {
    items.push({
      title: hasObjectKey ? (
        <Link to={`/bucket/${bucketName}`}>{bucketName}</Link>
      ) : (
        bucketName
      ),
    });

    if (hasObjectKey) {
      items.push({ title: objectKey });
    }
  }

  return <AntdBreadcrumb items={items} />;
}
