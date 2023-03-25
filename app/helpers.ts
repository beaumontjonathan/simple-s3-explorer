const nearestOneDecimal = (value: number): number => {
  return Math.round(10 * value) / 10;
}

const BYTE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];

/**
 * @example
 *
 * formatBytes(321); // '321 B'
 * formatBytes(4_321); // '4.3 KB'
 * formatBytes(7_654_321); // '7.7 MB'
 * formatBytes(6_787_654_321); // '6.8 GB'
 * formatBytes(3_456_787_654_321); // '3.5 TB'
 */
export const formatBytes = (bytes: number): string => {
  let unitIndex = 0;
  let value = bytes;
  while (value >= 1000 && unitIndex + 1 < BYTE_UNITS.length) {
    unitIndex += 1;
    value /= 1000;
  }
  return `${nearestOneDecimal(value)} ${BYTE_UNITS[unitIndex]}`;
}

export const getObjectKeyFileName = (objectKey: string): string => {
  // TODO: Throw
  return objectKey.split('/').at(-1) ?? '';
};
