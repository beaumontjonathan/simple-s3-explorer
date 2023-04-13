import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import { BucketPage } from './routes/Bucket.js';
import { ProfilePage } from './routes/Profile.js';

type ApplicationPage =
  | {
      type: 'buckets';
    }
  | BucketPage
  | ProfilePage
  | {
      type: '%unknown$';
    };

type SetPages = Dispatch<SetStateAction<ApplicationPage[]>>;

const pagesContext = createContext<ApplicationPage[] | null>(null);
const setPagesContext = createContext<SetPages | null>(null);

export const usePages = (): ApplicationPage[] => {
  const pages = useContext(pagesContext);
  if (pages === null) {
    throw new Error('Cannot use pages context outside of <PagesProvider />');
  }
  return pages;
};

const useSetPages = (): SetPages => {
  const setPages = useContext(setPagesContext);
  if (setPages === null) {
    throw new Error('Cannot use pages context outside of <PagesProvider />');
  }
  return setPages;
};

export function PagesProvider({ children }: PropsWithChildren) {
  const [pages, setPages] = useState<ApplicationPage[]>([]);
  return (
    <pagesContext.Provider value={pages}>
      <setPagesContext.Provider value={setPages}>
        {children}
      </setPagesContext.Provider>
    </pagesContext.Provider>
  );
}

type NavigateOptions = {
  replace?: boolean;
};

type Navigate = {
  (page: ApplicationPage, options?: NavigateOptions): void;
  (index: -1): void;
};

export const useNavigate = (): Navigate => {
  const setPages = useSetPages();
  return useCallback(
    (pageOrIndex, { replace = false } = {}) =>
      setPages((pages) => {
        if (typeof pageOrIndex === 'number') {
          return pages.slice(0, pages.length - 1);
        }
        return [
          ...pages.slice(0, replace ? pages.length - 1 : pages.length),
          pageOrIndex,
        ];
      }),
    []
  );
};
