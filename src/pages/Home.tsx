import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <div className="grid grid-cols-2 gap-20 px-32 pt-16">
      <div className="grid grid-cols-2 gap-8 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="items-center">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
