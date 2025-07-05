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
import Dashboard from "../Pages/Dashboard";
import orders from "../Pages/orders";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

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
      { path: "cart", Component: CartPage }, // سفرشات وقتی کاربر (وارد نشده) گرفته میشود و پس از وارد شدن کاربر به سفارشات کاربر اضافه میشود
      { path: "Shop", Component: Shop },
      {
        Component: AdminRoute,
        children: [
          { path: "dashboard", Component: Dashboard },
          { path: "orders", Component: orders },
          { path: "CreateNewProduct", Component: CreateNewProduct },
        ],
      },
      {
        Component: UserRoute,
        children: [
          { path: "Profile", Component: UpdateProfile },
          { path: "mycart", Component: CartPage }, // آدرس باید اصلاح بشه و سفارشات کاربر نمایش داده شود
        ],
      },
    ],
  },
]);

export default Routes;
