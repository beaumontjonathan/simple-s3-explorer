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
