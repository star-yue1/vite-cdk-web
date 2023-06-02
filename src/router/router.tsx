
import { ComponentType, LazyExoticComponent, lazy } from "react";

export interface IRouter {
  path: string;
  component: LazyExoticComponent<ComponentType<unknown>>;
  title: string;
  element?: string;
  children?: IRouter[];
  showMenu?: boolean; // 是否需要展示菜单
  auth?: boolean; // 是否需要登陆
}
export const routes: IRouter[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/home")),
    title: "主页",
    showMenu: true,
    auth: true,
    children: [
      {
        path: "/userList",
        component: lazy(() => import("../pages/userList")),
        title: "用户列表",
        showMenu: true,
        auth: true,
      },
      {
        path: "/cdkList",
        component: lazy(() => import("../pages/cdkList")),
        title: "cdk列表",
        showMenu: true,
        auth: true,
      },
    ],
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login")),
    auth: false,
    title: "登陆",
  },
  {
    path: "/*",
    title: "",
    component: lazy(() => import("../pages/Redirect")), // 重定向
  },
];

