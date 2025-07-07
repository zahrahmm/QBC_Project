
const ProductCard = () => {
  return (
    <div className="card card-xs sm:card-sm md:card-md lg:card-lg xl:card-xl bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title relative">
          Apple iPad Pro 12.9-inch{" "}
          <div className="badge badge-xs sm:badge-sm md:badge-md lg:badge-lg xl:badge-xl badge-secondary absolute left-2">
            ۱۰,۰۰۰ تومان
          </div>
        </h2>
        <p>
          صفحه نمایش با فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه
          گانه ...
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">اپل</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
