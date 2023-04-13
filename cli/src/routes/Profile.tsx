import { Box, useFocus, useFocusManager } from 'ink';
import { Suspense } from 'react';
import Loading from '../components/Loading.js';
import { useSetProfileName } from '../profile.js';
import ProfileSelect from '../ProfileSelect.js';

export type ProfilePage = {
  type: 'profile';
};

type Props = {};

export default function Profile({}: Props) {
  const { isFocused } = useFocus({ autoFocus: true, id: 'profile-select' });
  const focus = useFocusManager();
  const setProfileName = useSetProfileName();

  return (
    <Box flexDirection="column">
      <Suspense fallback={<Loading title="Loading profiles..." />}>
        <ProfileSelect
          onChange={(profile) => {
            setProfileName(profile.name);
            setTimeout(() => {
              focus.focusNext();
            }, 10);
          }}
          isFocused={isFocused}
        />
      </Suspense>
    </Box>
  );
}
