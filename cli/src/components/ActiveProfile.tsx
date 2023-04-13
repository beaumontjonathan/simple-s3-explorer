import { Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import { useProfileName } from '../profile.js';
import { useNavigate } from '../navigator.js';

export default function ActiveProfile() {
  const { isFocused } = useFocus();
  const focus = useFocusManager();
  const profileName = useProfileName();
  const navigate = useNavigate();

  useInput(
    (_, key) => {
      if (key.return) {
        navigate({ type: 'profile' });
        setTimeout(() => {
          focus.focus('profile-select');
        }, 5);
      }
    },
    { isActive: isFocused }
  );

  return (
    <Box borderStyle="round" borderColor={isFocused ? 'blue' : undefined}>
      <Text color={isFocused ? 'blue' : undefined}>{profileName}</Text>
    </Box>
  );
}
