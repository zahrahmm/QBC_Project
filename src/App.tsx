// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/Routes";
import ProductCard from "./components/ProductCard";

export type productType = {
  productName: string;
  productPrice: number;
  productCardImage: string;
  productDescription: string;
  productRate: number;
  productBrand: string;
  // productUpdateTime: Date;
  // productAvailability: number;
};

function App() {
  const product1: productType = {
    productName: "Apple",
    productPrice: 90000000,
    productCardImage: "",
    productDescription: "گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت",
    productRate: 5,
    productBrand: "Apple",
    //productUpdateTime: 12.06.2025,
    
  };

  return (
    <Router>
      <RoutesComponent />
      <ProductCard productInfo={product1} />
      <ProductCard productInfo={product1} />
      <ProductCard productInfo={product1} />
      <ProductCard productInfo={product1} />
    </Router>
  );
}

export default App;
