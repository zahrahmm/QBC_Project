import { createBrowserRouter } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import NotFound from "../Pages/NotFound";
import Layout from "./Layout/Layout";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import CreateNewProduct from "../Pages/CreateNewProduct";
import UpdateProfile from "../Pages/UpdateProfile";
import Dashboard from "../Pages/Dashboard";
import orders from "../Pages/orders";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import EditUsersTable from "../Pages/editUsersTable";
import AllProduct from "../Pages/AllProduct";
import EditProduct from "../Pages/EditProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "CartPage", Component: CartPage },
      { path: "Register", Component: RegisterPage },
      { path: "Login", Component: LoginPage },
      { path: "cart", Component: CartPage },
      { path: "Shop", Component: Shop },

      {
        Component: AdminRoute,
        children: [
          { path: "dashboard", Component: Dashboard },
          { path: "orders", Component: orders },
          { path: "CreateNewProduct", Component: CreateNewProduct },
          { path: "allusers", Component: EditUsersTable },
          { path: "allproducts", Component: AllProduct },
          { path: "edit-product/:id", Component: EditProduct },
        ],
      },

      {
        Component: UserRoute,
        children: [
          { path: "Profile", Component: UpdateProfile },
          { path: "mycart", Component: CartPage },
        ],
      },
    ],
  },
]);

export default Routes;
