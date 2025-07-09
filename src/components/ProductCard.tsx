import useNewProducts from "../utils/use-new-products";

const ProductCard = () => {
  const { data: products } = useNewProducts();

  return (
    <div>
      {products?.slice(0, 4).map((product) => (
        <div className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="badge badge-soft badge-secondary ">جدید</div>
            <h2 className="card-title pt-2 ">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{product.category.name}</div>
              <div className="rating">
                <div className="mask mask-star" aria-label="1 star"></div>
                <div className="mask mask-star" aria-label="2 star"></div>
                <div
                  className="mask mask-star"
                  aria-label="3 star"
                  aria-current="true"></div>
                <div className="mask mask-star" aria-label="4 star"></div>
                <div className="mask mask-star" aria-label="5 star"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
