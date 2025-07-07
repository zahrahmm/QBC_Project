import { useState } from "react";
import TabSelector from "./TabSelector";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ProductFooter = () => {
  const [activeTab, setActiveTab] = useState<"view" | "add" | "related">(
    "view"
  );

  return (
    <div>
      <h1>Quera</h1>
      <div className="flex gap-10 p-8">
        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">
          {activeTab === "add" && <ReviewForm />}
          {activeTab === "view" && <ReviewList />}
          {activeTab === "related" && (
            <p>در اینجا محصولات مرتبط نمایش داده می‌شوند.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
