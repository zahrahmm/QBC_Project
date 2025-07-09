// Shop.tsx
import ProductCard from "../components/Shop/ProductCard";
import SearchBar from "../components/Shop/SearchBar";
import useProducts from "../utils/use-products";
import type { productType as ProductCards } from "../types/productType";
import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

function Shop() {
  const { data, isLoading } = useProducts();
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/allproducts" />;

  if (isLoading) {
    return <div className="p-4">درحال بارگذاری</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-4">محصولی موحود نیست</div>;
  }

  console.log(data);

  return (
    <div className="p-4 grid grid-cols-[auto_1fr] gap-5">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: ProductCards) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
