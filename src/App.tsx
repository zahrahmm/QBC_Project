import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProcess from "./Pages/CartProcessPage";
import SummaryPage from "./Pages/CartSummaryPage";
import Layout from "./components/Layout";
import TabSelector from "./components/ProductPage/TabSelector";
import ReviewForm from "./components/ProductPage/ReviewForm";
import ReviewList from "./components/ProductPage/ReviewList";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/cart" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/process" element={<CartProcess />} />
          <Route path="/cart/summary" element={<SummaryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
