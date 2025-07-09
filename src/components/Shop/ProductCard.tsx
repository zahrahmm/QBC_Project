import { useNavigate } from "react-router-dom";
import type { productType } from "../../types/productType";

function ProductCard({ product }: { product: productType }) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-100 shadow-xl h-96"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <figure className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-none"
        />
      </figure>
      <div className="card-body p-4 h-48 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-lg line-clamp-2">{product.name}</h2>
          <p className="text-md font-semibold mt-2">
            {product.price.toLocaleString() + " " + "تومان"}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-sm">مشاهده بیشتر</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
