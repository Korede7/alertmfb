import { Routes, Route } from "react-router-dom";
import { routes } from "./index";

const renderRoutes = (routes: any[]) =>
  routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.element}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const AppRoutes = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};

export default AppRoutes;