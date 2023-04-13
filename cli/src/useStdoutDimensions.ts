import { useStdout } from 'ink';
import { useEffect, useState } from 'react';

type Dimensions = {
  columns: number;
  rows: number;
};

export default function useStdoutDimensions(): Dimensions {
  const { stdout } = useStdout();
  const [dimensions, setDimensions] = useState<Dimensions>({
    columns: stdout.columns,
    rows: stdout.rows,
  });

  useEffect(() => {
    const handler = () =>
      setDimensions({ columns: stdout.columns, rows: stdout.rows });
    stdout.on('resize', handler);
    return () => {
      stdout.off('resize', handler);
    };
  }, [stdout]);

  return dimensions;
}
