import useNewProducts from "../utils/useNewProducts";

const ProductCard = () => {
  const { data: newProducts } = useNewProducts();
  // console.log(newProducts);
  return (
    <div>
      {newProducts?.map((newProducts) => (
        <div key={newProducts._id} className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
          <figure>
            <img src={newProducts.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="badge badge-soft badge-secondary ">جدید</div>
            <h2 className="card-title pt-2 ">{newProducts.name}</h2>
            <p>{newProducts.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                {newProducts.category.name}
              </div>
              <div className="rating">
                <div className="mask mask-star" aria-label="1 star"></div>
                <div className="mask mask-star" aria-label="2 star"></div>
                <div
                  className="mask mask-star"
                  aria-label="3 star"
                  aria-current="true"
                ></div>
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
