import { useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Button } from 'antd';
import { ObjectDownloadButtonMutation } from '../__generated__/ObjectDownloadButtonMutation.graphql';

type Props = {
  bucketName: string;
  objectKey: string;
};

export default function ObjectDownloadButton({ bucketName, objectKey }: Props) {
  const [generateObjectDownloadUrl, mutationInFlight] =
    useMutation<ObjectDownloadButtonMutation>(
      graphql`
        mutation ObjectDownloadButtonMutation(
          $bucketName: String!
          $objectKey: String!
        ) {
          generateObjectDownloadUrl(bucket: $bucketName, key: $objectKey)
        }
      `
    );

  return (
    <Button
      loading={mutationInFlight}
      onClick={() => {
        generateObjectDownloadUrl({
          variables: {
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
