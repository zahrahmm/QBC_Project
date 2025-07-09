import { useNavigate } from "react-router-dom";
import type { ProductCards } from "../../types/types";
import useProductStore from "../../stores/useProductStore";

function ProductCard({ product }: { product: ProductCards }) {
  const navigate = useNavigate();
  const setSelectedProductId = useProductStore(
    (state) => state.setSelectedProductId
  );
  return (
    <div
      className="card bg-base-100 shadow-xl"
      // onClick={() => navigate(`/products/${product._id}`)}
    >
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.price.toLocaleString() + " " + "تومان"}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary "
            onClick={() => {
              setSelectedProductId(product._id);
              navigate(`/product/${product._id}`);
            }}
          >
            <span>مشاهده بیشتر</span>
            <span>←</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
