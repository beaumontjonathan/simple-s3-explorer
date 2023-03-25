import { Link } from '@remix-run/react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

type Props = {
  bucket: {
    name: string;
    region: string;
  };
  prefix: string;
}

export default function Breadcrumb({
  bucket: {
    name: bucketName,
    region,
  },
  prefix,
}: Props) {
  const prefixComponents = prefix.split('/');
  if (prefixComponents.at(-1) === '') prefixComponents.pop();

  return (
    <AntdBreadcrumb items={[
      { title: <Link to="/">Buckets</Link> },
      { title: prefix === '' ? bucketName : <Link to={`/buckets/${bucketName}`}>{bucketName}</Link> },
      ...prefixComponents.map((sub, index) => {
        if (index + 1 === prefixComponents.length) return { title: sub };
        const prefixToPart = prefixComponents.slice(0, index + 1).join('/');
        return {
          title: (
            <Link to={`/buckets/${bucketName}?region=${encodeURIComponent(region)}&prefix=${prefixToPart}/`}>
              {sub}
            </Link>
          ),
        };
      })
    ]} />
  )
}
