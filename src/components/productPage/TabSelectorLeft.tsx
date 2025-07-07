import RelatedProducts from "./RelatedProducts";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import type { Product } from "../../types/product";

interface TabSelectorLeftProps {
  activeTab: "view" | "add" | "related";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"view" | "add" | "related">
  >;
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  allProducts: Product[];
}

const TabSelectorLeft = ({
  activeTab,
  product,
  setProduct,
  allProducts,
}: TabSelectorLeftProps) => {
  if (!product) return null;
  return (
    <div>
      {activeTab === "add" && <ReviewForm setProduct={setProduct} />}
      {activeTab === "view" && <ReviewList reviews={product.reviews} />}
      {activeTab === "related" && (
        <RelatedProducts currentProduct={product} allProducts={allProducts} />
      )}
    </div>
  );
};

export default TabSelectorLeft;
