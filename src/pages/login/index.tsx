import { useModifyBackground } from "./utils";
import LoginPage from "@/pages/login/components/LoginPage";

import "./style.scss";
const Login = () => {
  // 修改body背景图
  useModifyBackground();

  return (
    <div className={"login-wrap"}>
      {/* 预留位置 */}
      <div style={{ width: 600 }}></div>
      <LoginPage />
    </div>
  );
};

export default Login;
