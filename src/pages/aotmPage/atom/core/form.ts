import { atom, useAtom } from "jotai";

export const SearchParamsAtom = atom({});
export const SearchLoadingAtom = atom(false);
export const useFormAtoms = () => {
  const [searchParams, setSearchParams] = useAtom(SearchParamsAtom);
  const [searchLoading, setSearchLoading] = useAtom(SearchLoadingAtom);

  return {
    searchParams,
    searchLoading,
    setSearchParams,
    setSearchLoading,
  };
};
