import { Spin } from 'antd';

export default function PageLoading() {
  return (
    <div
      style={{
        width: '100vw',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
}
