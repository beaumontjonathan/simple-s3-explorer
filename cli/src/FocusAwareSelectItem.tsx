import { Text } from 'ink';
import { ItemProps } from 'ink-select-input';
import { useIsFocused } from './FocusAware.js';

export default function FocusAwareSelectItem({
  label,
  isSelected = false,
}: ItemProps) {
  const isFocused = useIsFocused();
  return (
    <Text color={isSelected && isFocused ? 'blue' : undefined}>{label}</Text>
  );
}
