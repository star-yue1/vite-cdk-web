import { useEffect } from "react";
import Layout from "../layout";
import LeftMenu from "../Menu";
import { Outlet } from "react-router-dom";

function Home() {
  useEffect(() => {
    console.log("Home");
  }, []);
  return (
    <>
      <div style={{ height: "60px", borderBottom: "solid 1px #ccc" }}>
        <Layout />
      </div>
      <div style={{ height: "calc(100% - 61px)", display: "flex" }}>
        <LeftMenu />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Home;
