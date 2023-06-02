import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, matchRoutes } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { routes, IRouter } from "@/router/router";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const getMenuOption = (router: IRouter[] | undefined): MenuItem[] | [] => {
  if (router?.length) {
    return router.map((item: IRouter) => {
      return item.showMenu
        ? getItem(
            item.title,
            item.path,
            null,
            item.children?.length ? getMenuOption(item?.children) : undefined
          )
        : null;
    });
  }
  return [];
};

const menuOption = getMenuOption(routes);

interface IProps {
  children?: React.ReactNode;
}
const LeftMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string>("");
  const [openMenukeys, setOpenMenukeys] = useState<string[]>([
    "/",
  ]);

  useEffect(() => {
    const mathchs = matchRoutes(routes, location);
    setSelectedKeys(location.pathname);
    setOpenMenukeys(mathchs?.map((item) => item.pathname).reverse() || []);
  }, [location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKeys(e.key);
    setOpenMenukeys(e.keyPath);
    if (e.key !== location.pathname) {
      navigate(e.key, { replace: true });
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[selectedKeys]}
      style={{ width: 180 }}
      defaultSelectedKeys={openMenukeys}
      defaultOpenKeys={openMenukeys}
      mode="inline"
      items={menuOption}
    />
  );
};

export default LeftMenu;
