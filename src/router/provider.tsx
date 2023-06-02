import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IRouter, routes } from "@/router/router";
import AuthRoute from "./AuthRouter";
import Loading from "@/common/components/loading";

function RouteProvider() {
  const Router = (routes: IRouter[]) =>
    routes.map(({ path, component: Component, children, auth = true }) => {
      return (
        <Route
          key={path}
          path={path}
          Component={() => (
            <Suspense fallback={<Loading />}>
              <AuthRoute auth={auth} key={path}>
                <Component />
              </AuthRoute>
            </Suspense>
          )}
        >
          {children ? Router(children) : null}
        </Route>
      );
    });
  return (
    <BrowserRouter basename="/">
      <Routes>
        {Router(routes)}
        <Route path="*" element={<div>123</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteProvider;
