import useNewProducts from "../../utils/useNewProducts";
import Loading from "../Loading";
import ProductCard from "./ProductCard";

const NewProductsSection = () => {
      const { data: newProducts, isLoading, error } = useNewProducts();
      if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return  
    <Loading />
    // <div>Error fetching products: {error.message}</div>;
  }

    return (
       <div className="grid grid-cols-2 gap-6">
        {newProducts?.slice(0, 4).map((newProduct) => (
            <ProductCard key={newProduct._id} product={newProduct}  />
        ))}
       </div>
    )
}

export default NewProductsSection;