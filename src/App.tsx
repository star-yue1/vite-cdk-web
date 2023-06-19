import { useEffect } from "react";
import "./App.css";
import RouteProvider from "@/router/provider";
import { getInfo } from "./common/api/app";

function App() {
  useEffect(() => {
    (async () => {
      const list = await getInfo();
      console.log('list', list);
      
    })()
  }, [])
  return <RouteProvider />;
}

export default App;
