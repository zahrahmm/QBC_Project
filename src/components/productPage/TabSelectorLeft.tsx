import RelatedProducts from "./RelatedProducts";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

type TabSelectorLeftProps = {
  activeTab: "view" | "add" | "related";
  setActiveTab: (tab: "view" | "add" | "related") => void;
};
const TabSelectorLeft = ({ activeTab }: TabSelectorLeftProps) => {
  return (
    <div>
      {activeTab === "add" && <ReviewForm />}
      {activeTab === "view" && <ReviewList />}
      {activeTab === "related" && <RelatedProducts />}
    </div>
  );
};

export default TabSelectorLeft;
