const SearchBar = () => {
  return (
    <aside className="h-[80vh] w-64 p-4 bg-base-200">
      <form className="flex flex-col items-center h-full">
        <div className="w-full h-10 mx-2 my-4 text-neutral dark:text-white  flex items-center justify-center rounded-full bg-white dark:bg-neutral">
          <p>فیلتر برند ها</p>
        </div>
        <ul className="w-full flex flex-col gap-4">
          <li>
            <input
              type="radio"
              name="brands"
              className="radio radio-primary radio-xs ml-3"
            />
            {" Apple "}
          </li>
          <li>
            <input
              type="radio"
              name="brands"
              className="radio radio-primary radio-xs ml-3"
            />
            {" MicroSoft "}
          </li>
          <li>
            <input
              type="radio"
              name="brands"
              className="radio radio-primary radio-xs ml-3"
            />
            {" Apple "}
          </li>
        </ul>
        <div className="w-full h-10 mx-2 my-4 text-neutral dark:text-white  flex items-center justify-center rounded-full bg-white dark:bg-neutral">
          <p>فیلتر قیمت ها</p>
        </div>
        <input
          placeholder="قیمت را وارد کنید (به تومان)"
          type="number"
          className="appearance-none input input-sm"
        />
        <input
          className="input input-neutral h-10 mx-2 my-4"
          type="reset"
          value="حذف فیلتر ها"
        />
      </form>
    </aside>
  );
};

export default SearchBar;
