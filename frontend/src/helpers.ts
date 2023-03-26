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

export function useProfileName(): string {
  const [searchParams] = useSearchParams();
  return searchParams.get('p') ?? 'default';
}

export type WithProfileNameParam = (
  params: Record<string, string>
) => Record<string, string>;

export function useWithProfileNameParam(): WithProfileNameParam {
  const profileName = useProfileName();
  return useCallback(
    (params) => {
      return profileName === 'default'
        ? params
        : Object.assign(params, { p: profileName });
    },
    [profileName]
  );
}

export function useSetProfileName(): (args: { profileName: string }) => void {
  const currentProfileName = useProfileName();
  const withProfileNameParam = useWithProfileNameParam();
  const navigate = useNavigate();
  return useCallback(
    ({ profileName }) => {
      if (profileName !== currentProfileName) {
        navigate({
          pathname: '/',
          search: createSearchParams(withProfileNameParam({})).toString(),
        });
      }
    },
    [currentProfileName, withProfileNameParam]
  );
}
