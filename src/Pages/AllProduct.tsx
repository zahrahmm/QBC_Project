import { useEffect } from "react";
import AllProductCard from "../components/Cart/ProductCard/AllProductCard";
import { useProductStore } from "../store/useProductStore";

const AllProduct = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const getPersianDate = () => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return formatter.format(date);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] justify-center px-8">
      {products.map((product) => (
        <AllProductCard
          key={product.productId}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          date={getPersianDate()}
        />
      ))}
    </div>
  );
};

export default AllProduct;
