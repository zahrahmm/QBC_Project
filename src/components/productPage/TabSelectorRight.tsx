type TabSelectorRightProps = {
  activeTab: "view" | "add" | "related";
  setActiveTab: (tab: "view" | "add" | "related") => void;
};

function TabSelectorRight({ activeTab, setActiveTab }: TabSelectorRightProps) {
  return (
    <div className="mr-32 flex flex-col items-start gap-5">
      <button
        onClick={() => setActiveTab("add")}
        className={activeTab === "add" ? "font-bold" : "font-normal"}
      >
        ثبت نظر
      </button>
      <button
        onClick={() => setActiveTab("view")}
        className={activeTab === "view" ? "font-bold" : "font-normal"}
      >
        مشاهده نظرات
      </button>
      <button
        onClick={() => setActiveTab("related")}
        className={activeTab === "related" ? "font-bold" : "font-normal"}
      >
        محصولات مرتبط
      </button>
    </div>
  );
}

export default TabSelectorRight;
