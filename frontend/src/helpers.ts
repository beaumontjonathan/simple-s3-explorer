import { useCallback } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

const BYTE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];

export function formatBytes(bytes: number) {
  let value = bytes;
  let bytesUnitIndex = 0;

  while (value >= 1000 && bytesUnitIndex + 1 <= BYTE_UNITS.length) {
    value /= 1000;
    bytesUnitIndex += 1;
  }

  return `${roundToOneDecimal(value)} ${BYTE_UNITS[bytesUnitIndex]}`;
}

const DEFAULT_AWS_PROFILE = 'default';

export function useProfileName(): string {
  const [searchParams] = useSearchParams();
  return searchParams.get('p') ?? DEFAULT_AWS_PROFILE;
}

export type WithProfileNameParam = (
  params: Record<string, string>
) => Record<string, string>;

export function useWithProfileNameParam(): WithProfileNameParam {
  const profileName = useProfileName();
  return useCallback(
    (params) => {
      return profileName === DEFAULT_AWS_PROFILE
        ? params
        : Object.assign(params, { p: profileName });
    },
    [profileName]
  );
}

export function useSetProfileName(): (args: { profileName: string }) => void {
  const currentProfileName = useProfileName();
  const navigate = useNavigate();
  return useCallback(
    ({ profileName }) => {
      if (profileName !== currentProfileName) {
        navigate({
          pathname: '/',
          search: createSearchParams(
            profileName === DEFAULT_AWS_PROFILE ? {} : { p: profileName }
          ).toString(),
        });
      }
    },
    [currentProfileName]
  );
}
