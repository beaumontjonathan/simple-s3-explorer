import { Breadcrumb as AntdBreadcrumb } from 'antd';
import {
  Link,
  useParams,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import {
  useProfileName,
  useSetProfileName,
  useWithProfileNameParam,
  WithProfileNameParam,
} from '../helpers';

const linkBreadcrumbsFromKey = (
  key: string,
  bucketName: string,
  isObjectKey: boolean,
  withProfileNameParam: WithProfileNameParam
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
          to={{
            pathname: `/bucket/${bucketName}/browser`,
            search: createSearchParams(
              withProfileNameParam({
                prefix: encodeURIComponent(
                  prefixParts.slice(0, index + 1).join('/') + '/'
                ),
              })
            ).toString(),
          }}
        >
          {part}
        </Link>
      ),
  }));
};

export default function Breadcrumb() {
  const withProfileNameParam = useWithProfileNameParam();
  const { bucketName } = useParams();
  const [searchParams] = useSearchParams();
  const objectKeyString = searchParams.get('objectKey');
  const prefixString = searchParams.get('prefix');
  const hasBucketName = typeof bucketName === 'string';
  const hasObjectKey = typeof objectKeyString === 'string';
  const hasPrefix = typeof prefixString === 'string';

  const items = [
    {
      title: hasBucketName ? (
        <Link
          to={{
            pathname: '/',
            search: createSearchParams(withProfileNameParam({})).toString(),
          }}
        >
          S3 Buckets
        </Link>
      ) : (
        'S3 Buckets'
      ),
    },
  ];

  if (hasBucketName) {
    if (hasPrefix) {
      const prefix = decodeURIComponent(prefixString);
      items.push({
        title: (
          <Link
            to={{
              pathname: `/bucket/${bucketName}/browser`,
              search: createSearchParams(withProfileNameParam({})).toString(),
            }}
          >
            {bucketName}
          </Link>
        ),
      });
      items.push(
        ...linkBreadcrumbsFromKey(
          prefix,
          bucketName,
          false,
          withProfileNameParam
        )
      );
    } else {
      items.push({
        title: hasObjectKey ? (
          <Link
            to={{
              pathname: `/bucket/${bucketName}/browser`,
              search: createSearchParams(withProfileNameParam({})).toString(),
            }}
          >
            {bucketName}
          </Link>
        ) : (
          bucketName
        ),
      });

      if (hasObjectKey) {
        const objectKey = decodeURIComponent(objectKeyString);
        items.push(
          ...linkBreadcrumbsFromKey(
            objectKey,
            bucketName,
            true,
            withProfileNameParam
          )
        );
      }
    }
  }

  return <AntdBreadcrumb items={items} />;
}
