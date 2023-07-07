import React, { createContext } from "react"
import dataSource from '../../../src/data.json';
import { useRequest } from "ahooks";

const defaultValue = () => {

  const { runAsync: getList } = useRequest(() => {
    const data = new Promise<typeof dataSource>((resolve, reject) => {
      resolve(dataSource)
    })
    return data;
  }, { manual: true });


  return {
    getList
  }
}
export const CdkListApiContext = createContext(defaultValue);




export const CdkListProvider = ({ children }) => {
  return (
    <CdkListApiContext.Provider value={defaultValue}>
      {children}
    </CdkListApiContext.Provider>
  )
}