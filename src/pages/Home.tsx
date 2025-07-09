import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <div className="grid grid-cols-2 px-20 pt-20 gap-16">
      <div className="grid grid-cols-2 gap-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="col-span-1">
        <Carousel />
      </div>
      
    </div>
  );
};

export default Home;