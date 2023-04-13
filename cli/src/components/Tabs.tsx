import { Box, Text, useFocus, useInput } from 'ink';
import { Fragment, ReactNode, useEffect, useState } from 'react';

type TabItem<V> = {
  label: ReactNode;
  key: string;
  value: V;
  render: (value: V) => ReactNode;
};

type Props<V> = {
  items: TabItem<V>[];
  activeItemKey: string;
  onItemChange: (item: TabItem<V>) => void;
};

export default function Tabs<V>({
  items,
  activeItemKey,
  onItemChange,
}: Props<V>) {
  const { isFocused } = useFocus({ autoFocus: true });

  const activeIndex = items.findIndex((item) => item.key === activeItemKey);

  useInput(
    (_, key) => {
      if (key.rightArrow) {
        const newItemIndex = (activeIndex + 1) % items.length;
        onItemChange(items[newItemIndex]);
      } else if (key.leftArrow) {
        const newItemIndex = (items.length + activeIndex - 1) % items.length;
        onItemChange(items[newItemIndex]);
      }
    },
    { isActive: isFocused }
  );

  if (items.length === 0) return null;

  const currentActiveIndex = activeIndex + 1 <= items.length ? activeIndex : 0;

  const activeItem = items[currentActiveIndex];

  return (
    <Box flexDirection="column" gap={1}>
      <Box gap={1}>
        {items.map((item, itemIndex) => (
          <Fragment key={item.key}>
            <Text
              key={item.key}
              color={activeIndex === itemIndex && isFocused ? 'blue' : 'green'}
            >
              {item.label}
            </Text>
            {itemIndex + 1 === items.length ? null : <Text>{'| '}</Text>}
          </Fragment>
        ))}
      </Box>
      {activeItem.render(activeItem.value)}
    </Box>
  );
}
