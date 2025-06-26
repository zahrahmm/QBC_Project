import { Routes, Route } from "react-router";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Fave" element={<Fave />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;
