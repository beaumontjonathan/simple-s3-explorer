import { useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { ObjectDownloadButtonMutation } from '../__generated__/ObjectDownloadButtonMutation.graphql';
import { useProfileName } from '../helpers';

type Props = {
  bucketName: string;
  objectKey: string;
};

export default function ObjectDownloadButton({ bucketName, objectKey }: Props) {
  const profileName = useProfileName();
  const [generateObjectDownloadUrl, mutationInFlight] =
    useMutation<ObjectDownloadButtonMutation>(
      graphql`
        mutation ObjectDownloadButtonMutation(
          $profileName: String!
          $bucketName: String!
          $objectKey: String!
        ) {
          generateObjectDownloadUrl(
            profile: $profileName
            bucket: $bucketName
            key: $objectKey
          )
        }
      `
    );

  return (
    <Button
      icon={<DownloadOutlined />}
      loading={mutationInFlight}
      onClick={() => {
        generateObjectDownloadUrl({
          variables: {
            profileName,
            bucketName,
            objectKey,
          },
          onCompleted: ({ generateObjectDownloadUrl: url }) => {
            const fileName = objectKey.split('/').pop() ?? 'Unknown file';
            const link = document.createElement('a');
            link.download = fileName;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          },
        });
      }}
    >
      Download
    </Button>
  );
}
