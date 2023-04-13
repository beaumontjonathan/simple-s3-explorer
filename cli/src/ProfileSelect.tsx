import { Box } from 'ink';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ProfileSelectQuery } from './__generated__/ProfileSelectQuery.graphql.js';
import FocusAwareSelect from './FocusAwareSelect.js';

export type Profile = { name: string };

type Props = {
  onChange: (value: Profile) => void;
  isFocused: boolean;
};

export default function ProfileSelect({ onChange, isFocused }: Props) {
  const { profiles } = useLazyLoadQuery<ProfileSelectQuery>(
    graphql`
      query ProfileSelectQuery {
        profiles {
          name
        }
      }
    `,
    {}
  );

  return (
    <Box flexDirection="column">
      <FocusAwareSelect
        isFocused={isFocused}
        onSelect={(v) => onChange({ name: v.value.name! })}
        items={profiles.map((profile) => ({
          label: profile.name!,
          value: profile!,
          key: profile.name!,
        }))}
      />
    </Box>
  );
}
