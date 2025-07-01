import { useState } from "react";
import Layout from "./components/Layout";
import TabSelector from "./components/ProductPage/TabSelector";
import ReviewForm from "./components/ProductPage/ReviewForm";
import ReviewList from "./components/ProductPage/ReviewList";

function App() {
  const [activeTab, setActiveTab] = useState<"view" | "add" | "related">(
    "view"
  );
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
