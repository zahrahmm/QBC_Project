import type { productType } from "../App";

interface IProductCardProps {
  productInfo: productType;
}

const ProductCard = ({ productInfo }: IProductCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={"productInfo.productCardImage"}
          alt="{productInfo.productName}"
        />
      </figure>
      <div className="card-body">
        <p>{productInfo.productDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge">
            {productInfo.productPrice.toLocaleString()} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
