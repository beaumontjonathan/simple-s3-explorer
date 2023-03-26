import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const linkBreadcrumbsFromKey = (
  key: string,
  bucketName: string,
  isObjectKey: boolean
) => {
  const prefixParts = key.split('/');
  while (prefixParts.at(-1) === '' && !isObjectKey) prefixParts.pop();
  return prefixParts.map((part, index) => ({
    title:
      index + 1 === prefixParts.length ? (
        part || '.'
      ) : (
        <Link
          key={part}
          to={`/bucket/${bucketName}/browser?prefix=${encodeURIComponent(
            prefixParts.slice(0, index + 1).join('/') + '/'
          )}`}
        >
          {part}
        </Link>
      ),
  }));
};

export default function Breadcrumb() {
  const { bucketName } = useParams();
  const [searchParams] = useSearchParams();
  const objectKeyString = searchParams.get('objectKey');
  const prefixString = searchParams.get('prefix');
  const hasBucketName = typeof bucketName === 'string';
  const hasObjectKey = typeof objectKeyString === 'string';
  const hasPrefix = typeof prefixString === 'string';

  const items = [
    {
      title: hasBucketName ? <Link to="/">S3 Buckets</Link> : 'S3 Buckets',
    },
  ];

  if (hasBucketName) {
    if (hasPrefix) {
      const prefix = decodeURIComponent(prefixString);
      items.push({
        title: <Link to={`/bucket/${bucketName}/browser`}>{bucketName}</Link>,
      });
      items.push(...linkBreadcrumbsFromKey(prefix, bucketName, false));
    } else {
      items.push({
        title: hasObjectKey ? (
          <Link to={`/bucket/${bucketName}/browser`}>{bucketName}</Link>
        ) : (
          bucketName
        ),
      });

      if (hasObjectKey) {
        const objectKey = decodeURIComponent(objectKeyString);
        items.push(...linkBreadcrumbsFromKey(objectKey, bucketName, true));
      }
    }
  }

  return (
    <AntdBreadcrumb
      items={items}
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1,
      }}
    />
  );
}
