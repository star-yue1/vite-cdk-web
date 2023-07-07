import { atom, useAtom } from "jotai";

export const DefaultTableListPagination = {
  size: 1,
  page: 10,
};

export const TableListAtom = atom([]);
export const TableTotalAtom = atom(false);
export const TableListPaginationAtom = atom(DefaultTableListPagination);

export const useFormAtoms = () => {
  const [tableList, setTableList] = useAtom(TableListAtom);
  const [tableTotal, setTableTotal] = useAtom(TableTotalAtom);
  const [tableListPagination, setTableListPagination] = useAtom(
    TableListPaginationAtom
  );
  return {
    tableList,
    tableTotal,
    tableListPagination,
    setTableList,
    setTableTotal,
    setTableListPagination,
  };
};
