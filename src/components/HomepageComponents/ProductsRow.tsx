import useNewProducts from "../../utils/useNewProducts";
import ProductCard from "../ProductCard";

const ProductsRow = () => {
      const { data: newProducts, isLoading, error } = useNewProducts();
      if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

    return (
        <>
        <div className="flex justify-between px-22 pb-20">
        <h2 className="text-4xl">محصولات ویژه</h2>
        <button className="btn btn-secondary">فروشگاه</button>
        </div>
        <div className="grid grid-cols-4 gap-6 px-22">
        {newProducts?.slice(0, 7).map((newProduct) => (
            <ProductCard key={newProduct._id} product={newProduct}  />
        ))}
       </div>
        </>
       
    )
}

export default ProductsRow;