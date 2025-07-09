// import RelatedProducts from "./RelatedProducts";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import type { productType } from "../../types/productType";

interface TabSelectorLeftProps {
  activeTab: "view" | "add" | "related";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"view" | "add" | "related">
  >;
  product: productType | null;
  setProduct: React.Dispatch<React.SetStateAction<productType | null>>;
}

const TabSelectorLeft = ({
  activeTab,
  product,
  setProduct,
}: TabSelectorLeftProps) => {
  if (!product) return null;
  return (
    <div>
      {activeTab === "add" && (
        <ReviewForm product={product} setProduct={setProduct} />
      )}
      {activeTab === "view" && <ReviewList reviews={product.reviews} />}
      {/* {activeTab === "related" && (
        <RelatedProducts currentProduct={product} allProducts={allProducts} />
      )} */}
    </div>
  );
};

export default TabSelectorLeft;
