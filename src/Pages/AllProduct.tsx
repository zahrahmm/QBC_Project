import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllProductCard from "../components/Cart/ProductCard/AllProductCard";
import { useProductStore } from "../store/useProductStore";

const AllProduct = () => {
  const { products, fetchProducts } = useProductStore();
  const [persianDate, setPersianDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
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

    setPersianDate(getPersianDate());

    
    const now = new Date();
    const msToNextDay =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 1, 0, 0).getTime() - now.getTime();

    const timeout = setTimeout(() => {
      setPersianDate(getPersianDate());
      setInterval(() => {
        setPersianDate(getPersianDate());
      }, 24 * 60 * 60 * 1000);
    }, msToNextDay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] justify-center px-8">
      {products &&
        products.map((product) => (
          <AllProductCard
            key={product.productId}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            date={persianDate}
            onView={() => navigate(`/edit-product/${product.productId}`)}
          />
        ))}
    </div>
  );
};

export default AllProduct;
