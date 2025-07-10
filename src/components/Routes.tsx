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
import EditUsersTable from "../Pages/editUsersTable";
import AllProduct from "../Pages/AllProduct";
import EditProduct from "../Pages/EditProduct";
import CartProcessPage from "../Pages/CartProcessPage";
import CartSummaryPage from "../Pages/CartSummaryPage";
import OrdersMine from "../Pages/ordersMine";
import ProductPage from "../Pages/ProductPage";
import Favorites from "../Pages/Favorites";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: Shop },
      { path: "Fave", Component: Favorites },
      { path: "OrdersMine", Component: OrdersMine },
      { path: "Register", Component: RegisterPage },
      { path: "Login", Component: LoginPage },
      { path: "cart", Component: CartPage }, // سفرشات وقتی کاربر (وارد نشده) گرفته میشود و پس از وارد شدن کاربر به سفارشات کاربر اضافه میشود
      { path: "cart/process", Component: CartProcessPage },
      { path: "cart/summary", Component: CartSummaryPage },
      { path: "product/:id", Component: ProductPage },
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
          { path: "mycart", Component: CartPage }, // آدرس باید اصلاح بشه و سفارشات کاربر نمایش داده شود
          // { path: "product/:id", Component: ProductPage },
        ],
      },
    ],
  },
]);

export default Routes;
