import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const profileNameContext = createContext<string | null>(null);

export function useProfileName(): string {
  const profileName = useContext(profileNameContext);
  if (profileName === null) {
    throw new Error(
      'Cannot consume useProfileName outside of a <ProfileProvider />'
    );
  }
  return profileName;
}

const setProfileNameContext = createContext<SetProfileName | null>(null);

type SetProfileName = Dispatch<SetStateAction<string>>;

export function useSetProfileName(): SetProfileName {
  const setProfileName = useContext(setProfileNameContext);
  if (setProfileName === null) {
    throw new Error(
      'Cannot consume useSetProfileName outside of a <ProfileProvider />'
    );
  }
  return setProfileName;
}

export function ProfileProvider({ children }: PropsWithChildren) {
  const [profileName, setProfileName] = useState('default');

  return (
    <profileNameContext.Provider value={profileName}>
      <setProfileNameContext.Provider value={setProfileName}>
        {children}
      </setProfileNameContext.Provider>
    </profileNameContext.Provider>
  );
}
