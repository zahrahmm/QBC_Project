import { createBrowserRouter } from "react-router";
import CartPage from "../Pages/CartPage";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import NotFound from "../Pages/NotFound";
import Layout from "./Layout/Layout";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import CreateNewProduct from "../Pages/CreateNewProduct";
import UpdateProfile from "../Pages/UpdateProfile";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/CartPage", Component: CartPage },
      { path: "/Register", Component: RegisterPage },
      { path: "/Login", Component: LoginPage },
      { path: "/CreateNewProduct", Component: CreateNewProduct },
      { path: "/Shop", Component: Shop },
      { path: "/Profile", Component: UpdateProfile },
    ],
  },

  { path: "*", Component: NotFound },
]);

export default Routes;
