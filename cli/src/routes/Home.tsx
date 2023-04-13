import { useApp, useFocus } from 'ink';
import SelectInput from 'ink-select-input';
import { useState } from 'react';
import FocusAwareSelect from '../FocusAwareSelect.js';
import { useNavigate } from '../navigator.js';

type HomeItem = 'buckets' | 'exit';

export function Home() {
  const navigate = useNavigate();
  const app = useApp();
  const { isFocused } = useFocus({ autoFocus: true });

  return (
    <FocusAwareSelect
      onSelect={(item) => {
        switch (item.value) {
          case 'buckets':
            navigate({ type: 'buckets' });
            break;
          case 'exit':
            app.exit();
            break;
        }
      }}
      isFocused={isFocused}
      items={Array.from<HomeItem>(['buckets', 'exit']).map((item) => ({
        label: item,
        key: item,
        value: item,
      }))}
    />
  );
}
