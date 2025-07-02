import type { productType } from "../types/productType";

const ProductCard = ({ product }: productType) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={"productInfo.productCardImage"}
          alt="{productInfo.productName}"
        />
      </figure>
      <div className="card-body">
        <p>{product.productDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge">
            {product.productPrice.toLocaleString()} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
