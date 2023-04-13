import { createContext, PropsWithChildren, useContext } from 'react';

const isFocusedContext = createContext<boolean | null>(null);

export function useIsFocused(): boolean {
  const isFocused = useContext(isFocusedContext);
  if (isFocused === null) {
    throw new Error(
      'useIsFocused must be called within an <IsFocusedProvider />'
    );
  }
  return isFocused;
}

export function IsFocusedProvider({
  isFocused,
  children,
}: PropsWithChildren<{ isFocused: boolean }>) {
  return (
    <isFocusedContext.Provider value={isFocused}>
      {children}
    </isFocusedContext.Provider>
  );
}
