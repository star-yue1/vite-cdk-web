import { useFormAtoms } from "@/pages/aotmPage/atom/core/Table";

import data from '@/data.json'
export const useInitValue = () => {
  const { setTableList } = useFormAtoms();
  setTableList(data);
}