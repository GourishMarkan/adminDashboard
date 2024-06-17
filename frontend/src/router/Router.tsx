import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import { Permission, Search, View } from "../components";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/view" element={<View />} />
      <Route path="/permission" element={<Permission />} />
      <Route path="/search" element={<Search />} />
    </Route>
  )
);

export default Router;
