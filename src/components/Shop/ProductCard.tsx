import { useState } from "react";
import type { productType } from "../../types/productType";

function ProductCard({ product }: { product: productType }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card bg-base-100 shadow-xl h-96">
      <figure className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute badge badge-secondary bottom-3 right-4">
          {product.category.name}
        </span>
        <span
          onClick={() => setIsLiked((prev) => !prev)}
          className={`cursor-pointer absolute top-3 right-4 ${
            isLiked ? "text-secondary" : "text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </span>
      </figure>
      <div className="card-body p-4 h-48 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-lg line-clamp-2">{product.name}</h2>
          <p className="text-md font-semibold mt-2">
            {product.price.toLocaleString()} تومان
          </p>
        </div>
        <div className="card-actions justify-between items-center">
          <button className="btn btn-secondary btn-sm">
            افزودن به سبد خرید
          </button>
          <button className="hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
