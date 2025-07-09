import { useNavigate } from "react-router-dom";
import type { ProductCards } from "../../types/types";

function ProductCard({ product }: { product: ProductCards }) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-100 shadow-xl"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <figure>
        <img
          src={product.image}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.price.toLocaleString() + " " + "تومان"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
