import React from "react";
import Form from "@/pages/aotmPage/components/Form";
import Table from "@/pages/aotmPage/components/Table";
import { useInitValue } from "./utils";

type IProps = {
  contextValue?: any
}
function AotmPage({ contextValue }: IProps) {
  console.log('contextValue', contextValue);

  useInitValue()
  return (
    <main style={{ padding: '24px' }}>
      <Form />
      <Table />
    </main>
  );
}


export default function () {
  return <AotmPage />
}