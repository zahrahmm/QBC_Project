import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <div className="grid grid-cols-2 px-22 pt-10">
      <div className="grid grid-cols-2 gap-3 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
