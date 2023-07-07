import { useEffect } from "react";
import "./App.css";
import RouteProvider from "@/router/provider";
import { CdkListProvider } from "./contexts/CdkList";

function App() {

  return (
    <CdkListProvider>
      <RouteProvider />
    </CdkListProvider>
  );
}

export default App;
