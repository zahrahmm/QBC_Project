// import { useState } from "react";
import Carousel from "./components/Carousel";
import Layout from "./components/Layout";
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
    <Layout>
      <div>
        <h1>Quera</h1>
      </div>
      <ProductCard productInfo={product1} />
      <Carousel />
    </Layout>
  );
}

export default App;
