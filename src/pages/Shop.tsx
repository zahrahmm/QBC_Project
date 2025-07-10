import ProductCard from "../components/Shop/ProductCard";
import SearchBar from "../components/Shop/SearchBar";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import useProducts from "../utils/use-products";
import { useFilterStore } from "../stores/filterStore";

function Shop() {
  const { category, price } = useFilterStore();
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col gap-3 justify-center h-screen items-center">
        <h1 className="text-2xl">محصولی موجود نیست</h1>
        <Link to="/">
          <button className="btn btn-secondary">بازگشت به صفحه اصلی</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 flex gap-5 min-h-screen">
      <div className="sticky top-0 h-screen overflow-y-auto">
        <SearchBar products={data} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data
            .filter(
              (product) =>
                (!category || product.category.name === category) &&
                (!price || product.price <= Number(price))
            )
            .map((item) => (
              <ProductCard
                key={item._id}
                product={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
