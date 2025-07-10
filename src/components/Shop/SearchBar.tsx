import type { productType } from "../../types/productType";
import { useFilterStore } from "../../stores/filterStore";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  products: productType[];
}

const SearchBar = ({ products }: SearchBarProps) => {
  const { category, price, setCategory, setPrice, resetFilters } =
    useFilterStore();

  const categories = Array.from(
    new Set(products.map((product) => product.category.name))
  );

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <div className="w-64 p-4 bg-base-200 sticky top-0 h-screen overflow-y-auto">
      <form className="flex flex-col items-center h-full">
        <div className="w-full h-10 mx-2 my-4 text-neutral dark:text-white flex items-center justify-center rounded-full bg-white dark:bg-neutral">
          <p>فیلتر برند ها</p>
        </div>
        <ul className="w-full flex flex-col gap-4">
          {categories.map((categoryName) => (
            <li
              key={categoryName}
              className="flex items-center justify-end gap-2 rtl:pe-2"
            >
              <label
                htmlFor={`category-${categoryName}`}
                className="cursor-pointer text-right flex-1"
              >
                {categoryName}
              </label>
              <input
                type="radio"
                id={`category-${categoryName}`}
                name="categories"
                value={categoryName}
                checked={category === categoryName}
                onChange={handleCategoryChange}
                className="radio radio-secondary radio-xs"
              />
            </li>
          ))}
        </ul>

        <div className="w-full h-10 mx-2 my-4 text-neutral dark:text-white flex items-center justify-center rounded-full bg-white dark:bg-neutral">
          <p>فیلتر قیمت ها</p>
        </div>
        <input
          placeholder="قیمت را وارد کنید (به تومان)"
          type="number"
          value={price} // Directly use global price state
          onChange={handlePriceChange}
          className="appearance-none input input-sm"
          min="0"
        />

        <button
          type="button"
          onClick={resetFilters}
          className="input input-neutral h-10 mx-2 my-4 cursor-pointer"
        >
          حذف فیلتر ها
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
