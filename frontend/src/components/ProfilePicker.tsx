import { Button, Dropdown } from 'antd';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { UserOutlined } from '@ant-design/icons';
import { useProfileName, useSetProfileName } from '../helpers';
import { ProfilePickerQuery } from '../__generated__/ProfilePickerQuery.graphql';

export default function ProfilePicker() {
  const { profiles } = useLazyLoadQuery<ProfilePickerQuery>(
    graphql`
      query ProfilePickerQuery {
        profiles {
          name
        }
      }
    `,
    {}
  );

  const profileName = useProfileName();
  const setProfileName = useSetProfileName();

  return (
    <Dropdown
      menu={{
        selectable: true,
        selectedKeys: [profileName],
        onSelect: (info) => {
          setProfileName({ profileName: info.selectedKeys[0] });
        },
        items: profiles.map(({ name }) => ({
          key: name!,
          label: name!,
        })),
      }}
    >
      <Button icon={<UserOutlined />}>{profileName}</Button>
    </Dropdown>
  );
}
