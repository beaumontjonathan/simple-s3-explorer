import { ComponentProps } from 'react';
import SelectInput from 'ink-select-input';
import FocusAwareSelectIndicator from './FocusAwareSelectIndicator.js';
import { useFocus } from 'ink';
import { IsFocusedProvider } from './FocusAware.js';
import FocusAwareSelectItem from './FocusAwareSelectItem.js';

type InkSelectInputProps<V> = ComponentProps<typeof SelectInput>;

export type Item<V> = {
  key?: string;
  label: string;
  value: V;
};

type Props<V> = Omit<
  InkSelectInputProps<V>,
  | 'isFocused'
  | 'indicatorComponent'
  | 'itemComponent'
  | 'items'
  | 'onSelect'
  | 'onHighlight'
> & {
  isFocused: boolean;
  /**
   * Items to display in a list. Each item must be an object and have `label` and `value` props, it may also optionally have a `key` prop.
   * If no `key` prop is provided, `value` will be used as the item key.
   */
  items?: Array<Item<V>>;

  /**
   * Function to call when user selects an item. Item object is passed to that function as an argument.
   */
  onSelect?: (item: Item<V>) => void;
  /**
   * Function to call when user highlights an item. Item object is passed to that function as an argument.
   */
  onHighlight?: (item: Item<V>) => void;
};

export default function FocusAwareSelect<V>(props: Props<V>) {
  return (
    <IsFocusedProvider isFocused={props.isFocused}>
      <SelectInput<V>
        indicatorComponent={FocusAwareSelectIndicator}
        itemComponent={FocusAwareSelectItem}
        {...props}
      />
    </IsFocusedProvider>
  );
}
