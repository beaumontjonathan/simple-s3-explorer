import { Box, Text } from 'ink';
import Spinner from 'ink-spinner';

type Props = {
  title: string;
};

export default function Loading({ title }: Props) {
  return (
    <Box gap={1}>
      <Text color="green">
        <Spinner type="dots" />
      </Text>
      <Text>{title}</Text>
    </Box>
  );
}
