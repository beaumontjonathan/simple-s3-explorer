import { Box, Text, useApp, useFocus, useFocusManager, useInput } from 'ink';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate, usePages } from '../navigator.js';
import useStdoutDimensions from '../useStdoutDimensions.js';

type Action = 'back' | 'exit';

export default function StatusBar() {
  const { exit } = useApp();
  const pages = usePages();
  const navigate = useNavigate();
  const { isFocused } = useFocus();
  const f = useFocusManager();
  const { columns } = useStdoutDimensions();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isFocused) {
      setActiveIndex(0);
    }
  }, [isFocused]);

  const backgroundColor = isFocused ? 'green' : 'green';

  const actions: Action[] = [
    ...(pages.length === 0 ? [] : (['back'] as const)),
    'exit',
  ];

  const handleAction = () => {
    const action = actions.at(activeIndex) ?? null;
    if (action === null) {
      throw new Error('Index out of bounds');
    }

    switch (action) {
      case 'back':
        navigate(-1);
        setTimeout(() => {
          f.focusNext();
        }, 5);
        break;
      case 'exit':
        exit();
        break;
    }
  };

  useInput(
    (_, key) => {
      if (key.rightArrow) {
        setActiveIndex((current) => (current + 1) % actions.length);
      } else if (key.leftArrow) {
        setActiveIndex(
          (current) => (actions.length + current - 1) % actions.length
        );
      } else if (key.return) {
        handleAction();
      }
    },
    { isActive: isFocused }
  );

  const remainingWidth = actions.reduce(
    (acc, action) => acc - action.length - 1,
    columns
  );

  return (
    <Box width="100%" flexGrow={0} overflowY="hidden" flexDirection="row">
      {/* <Text backgroundColor={isFocused ? 'blue' : 'green'}>
        {'hello'}
      </Text> */}
      {actions.map((action, index) => (
        <Fragment key={action}>
          <Text backgroundColor={backgroundColor}> </Text>
          <Text
            color="black"
            backgroundColor={
              isFocused && index === activeIndex ? 'blue' : backgroundColor
            }
          >
            {action}
          </Text>
          {index + 1 === actions.length ? (
            <Text backgroundColor={backgroundColor}>
              {' '.repeat(remainingWidth)}
            </Text>
          ) : null}
        </Fragment>
      ))}
    </Box>
  );
}
