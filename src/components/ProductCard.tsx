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
        <h2 className="card-title">{productInfo.productName}</h2>
        <p>{productInfo.productDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            {productInfo.productPrice.toLocaleString()} تومان
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
