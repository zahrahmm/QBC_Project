import { Navigate, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import Carousel from "../components/HomepageComponents/Carousel";
import NewProductsSection from "../components/HomepageComponents/NewProductsSection";
import ProductsRow from "../components/HomepageComponents/ProductsRow";
import useProductStore from "../stores/useProductStore";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <>
    <div className="grid grid-cols-2  px-20 pt-20 gap-16">
      <div>
        <NewProductsSection />
      </div>
      <div className="col-span-1">
        <Carousel />
      </div>
    </div>
    <div>
      <ProductsRow />
    </div>
    </>
  );
};

export default Home;