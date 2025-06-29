import { Routes, Route } from "react-router";
import CartPage from "../Pages/CartPage";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import NotFound from "../Pages/NotFound";
import Layout from "./Layout";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Cart" element={<CartPage />} />
      {/* <Route path="Fave" element={<Fave />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />  */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;
