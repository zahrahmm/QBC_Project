import { createBrowserRouter } from "react-router";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import Layout from "./Layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CreateNewProduct from "../pages/CreateNewProduct";
import UpdateProfile from "../pages/UpdateProfile";
import Dashboard from "../pages/Dashboard";
import orders from "../pages/orders";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Carousel from "./Carousel";

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
      { path: "Carousel", Component: Carousel },
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
