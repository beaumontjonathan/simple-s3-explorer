import figures from 'figures';
import { Box, Text } from 'ink';
import { IndicatorProps } from 'ink-select-input';
import { useIsFocused } from './FocusAware.js';

export default function FocusAwareSelectIndicator({
  isSelected = false,
}: IndicatorProps) {
  const isFocused = useIsFocused();

  return (
    <Box marginRight={1}>
      {isSelected ? (
        <Text color={isFocused ? 'blue' : undefined}>{figures.pointer}</Text>
      ) : (
        <Text> </Text>
      )}
    </Box>
  );
}
