// import { useState } from "react";
import Carousel from "./components/Carousel";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";

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
    <Layout>
      <div>
        <h1>Quera</h1>
      </div>
      <div className="grid grid-cols-2 gap-46">
        <div className="grid grid-cols-2">
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
          <ProductCard productInfo={product1} />
        </div>
        <Carousel />
      </div>
    </Layout>
  );
}

export default App;
