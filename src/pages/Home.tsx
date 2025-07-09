import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import Carousel from "../components/Carousel";
import NewProductsSection from "../components/HomepageComponents/NewProductsSection";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <div className="grid grid-cols-2  px-20 pt-20 gap-16">
      <div>
        <NewProductsSection />
      </div>
      <div className="col-span-1">
        <Carousel />
      </div>
      
    </div>
  );
};

export default Home;