import { useState } from "react";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10000, image: "/product1.jpg" },
    { id: 2, name: "Product 2", price: 10000, image: "/product2.jpg" },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">فروشگاه</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
