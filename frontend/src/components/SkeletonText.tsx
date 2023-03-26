import { Skeleton } from 'antd';

export default function SkeletonText() {
  return (
    <Skeleton
      active
      title={{ style: { margin: 0, height: 18 } }}
      paragraph={{ rows: 0, style: { margin: 0 } }}
    />
  );
}
