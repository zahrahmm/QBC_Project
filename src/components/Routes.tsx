import { Routes, Route } from "react-router";
import CartPage from "../Pages/CartPage";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import NotFound from "../Pages/NotFound";
import Layout from "./Layout";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import CreateNewProduct from "../Pages/CreateNewProduct";
import ProductPage from "./productPage/ProductPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        {/* <Route path="Fave" element={<Fave />} />*/}
        <Route path="Login" element={<LoginPage />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route path="CreateNewProduct" element={<CreateNewProduct />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;
