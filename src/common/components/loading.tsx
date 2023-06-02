import { Spin } from "antd";
import React from "react";

function Loading() {
  return (
    <Spin size="large" tip="Loading..." spinning>
      <div style={{ height: "100vh",width: "100%" }} ></div>
    </Spin>
  );
}

export default Loading;
