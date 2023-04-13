import { Box, Spacer, Text, useFocus, useInput } from 'ink';
import { PropsWithChildren } from 'react';
import StatusBar from './StatusBar.js';
import useStdoutDimensions from '../useStdoutDimensions.js';
import { useProfileName } from '../profile.js';
import { useNavigate } from '../navigator.js';
import ActiveProfile from './ActiveProfile.js';

type Props = PropsWithChildren<{
  title: string;
}>;

export default function Skeleton({ title, children }: Props) {
  const { rows } = useStdoutDimensions();

  return (
    <Box
      width="100%"
      height={rows}
      flexDirection="column"
    >
      <Box flexDirection="row" justifyContent="space-between" width="100%">
        <Spacer />
        <ActiveProfile />
      </Box>
      <Box
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexGrow={0}
        paddingBottom={1}
      >
        <Text>{title}</Text>
      </Box>
      <Box width="100%" justifyContent="center" flexGrow={1}>
        {children}
      </Box>
      <StatusBar />
    </Box>
  );
}
