import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProcess from "./Pages/CartProcessPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/cart" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/process" element={<CartProcess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
