import { Routes, Route } from "react-router";
import CartPage from "../Pages/CartPage";
import CartProcessPage from "../Pages/CartProcessPage";
import CartSummaryPage from "../Pages/CartSummaryPage";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import NotFound from "../Pages/NotFound";
import Layout from "./Layout";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import CreateNewProduct from "../Pages/CreateNewProduct";
import { CartProvider } from "../context/CartContext";

function RoutesComponent() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          {/* cart section */}
          <Route path="Cart" element={<CartPage />} />
          <Route path="Cart/process" element={<CartProcessPage />} />
          <Route path="Cart/summary" element={<CartSummaryPage />} />
          {/* <Route path="Fave" element={<Fave />} />*/}
          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="CreateNewProduct" element={<CreateNewProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default RoutesComponent;
