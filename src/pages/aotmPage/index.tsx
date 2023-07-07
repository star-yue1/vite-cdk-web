import React from "react";
import Form from "@/pages/common/Form";
import Table from "@/pages/common/Table";

type IProps = {
    contextValue?: any
}
 function AotmPage({ contextValue }: IProps) {
    console.log('contextValue', contextValue);
    
  return (
    <main style={{ padding: '24px'}}>
      <Form />
      <Table />
    </main>
  );
}


export default function () {
    return <AotmPage contextValue={{}}/>
}