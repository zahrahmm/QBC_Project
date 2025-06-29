import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

type productType = {
  productName: string;
  productPrice: number;
  productCardImage: string;
  productDescription: string;
  productRate: number;
  productBrand: string;
  // productUpdateTime: Date;
  // productAvailability: number;
};

function Home() {
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
    <div>
      <h1>test Home</h1>
      <div className="grid grid-cols-2">
        <ProductCard productInfo={product1} />
        <ProductCard productInfo={product1} />
        <ProductCard productInfo={product1} />
        <ProductCard productInfo={product1} />
      </div>
    </div>
  );
}

export default Home;
