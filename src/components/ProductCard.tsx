// import type { Product } from "../types";

// ToDo: Add isLiked Function
// ToDo: Link the btn to item page

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description?: string;
  // isLiked: false;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg">
      <figure className="relative">
        <img
          src="https://dkstatics-public.digikala.com/digikala-products/5af568b4909435c6a215ad5e728e902db234b673_1736597759.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
          alt={product.name}
          className="h-40 w-full object-none"
        />
        <div className="badge badge-primary absolute bottom-1.5 right-2.5">
          {product.brand}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-2.5 right-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </figure>
      <div className="card-body">
        <div className="card-title justify-between">
          <h2 className="">{product.name}</h2>
          <p className="max-w-fit">
            {product.price.toLocaleString() + " " + "تومان"}
          </p>
        </div>
        <div className="line-clamp-2">
          <p>{product.description}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <button className="btn btn-primary btn-lg justify-between">
            <p>افزودن به سبد خرید</p>
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <i className="size-6">
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
          </i>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
