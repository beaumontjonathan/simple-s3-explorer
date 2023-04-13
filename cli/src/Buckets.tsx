import { useFocus } from 'ink';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { BucketsQuery } from './__generated__/BucketsQuery.graphql.js';
import useStdoutDimensions from './useStdoutDimensions.js';
import FocusAwareSelect from './FocusAwareSelect.js';
import { useProfileName } from './profile.js';

export type Bucket = {
  name: string;
};

type Props = {
  onChange: (value: Bucket) => void;
};

export default function BucketSelect({ onChange }: Props) {
  const profileName = useProfileName();
  const { isFocused } = useFocus({ autoFocus: true, id: 'bucket-select' });

  const { profile } = useLazyLoadQuery<BucketsQuery>(
    graphql`
      query BucketsQuery($profileName: String!) {
        profile(name: $profileName) {
          name
          buckets(first: 100) {
            name
          }
        }
      }
    `,
    { profileName }
  );
  const { rows } = useStdoutDimensions();

  const limit = rows - 6;

  const items = profile!.buckets.map((bucket) => ({
    label: bucket.name,
    value: bucket,
    key: bucket.name,
  }));

  return (
    <FocusAwareSelect
      isFocused={isFocused}
      limit={limit}
      onSelect={(v) => onChange(v.value)}
      items={items}
    />
  );
}
