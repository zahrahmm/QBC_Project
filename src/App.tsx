// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/Routes";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  return (
    <Router>
      <RoutesComponent />
      <ProductPage />
    </Router>
  );
}

export default App;
