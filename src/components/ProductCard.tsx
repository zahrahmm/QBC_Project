import useNewProducts from "../utils/use-new-products";

// A helper component to dynamically render the rating stars
// It assumes the rating is a number from 1 to 5.
// const Rating = ({ rating }) => {
//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <div
//           key={star}
//           className="mask mask-star"
//           style={{ background: star <= rating ? "#FFD700" : "#E0E0E0" }} // Example coloring
//           aria-label={`${star} star`}
//           aria-current={star === rating ? "true" : "false"}></div>
//       ))}
//     </div>
//   );
// };

const ProductCard = () => {
  // Use a more descriptive name for the fetched data object
  const { data: products, isLoading, error } = useNewProducts();

  // Handle loading and error states for a better user experience
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    // It's good practice to wrap your list in a container
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* 1. Use `product` (singular) to avoid shadowing.
        2. Check if `products` exists before mapping.
      */}
      {products?.slice(0, 4).map((product) => (
        /* 3. Add the mandatory and unique `key` prop. product.id is ideal.
         */
        <div key={product._id} className="card bg-base-100 shadow-sm">
          <figure>
            {/* 4. Use the product name for the alt text for better accessibility.
             */}
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <div className="badge badge-secondary">جدید</div>
            <h2 className="card-title pt-2">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions items-center justify-between">
              <div className="badge badge-outline">
                {/* 5. Use optional chaining for safety.
                 */}
                {product.category?.name}
              </div>
              {/* 6. Render the rating dynamically if the data is available.
                   Assumes your product object has a `rating` property, e.g., product.rating = 4
              */}
              {/* {product.rating && <Rating rating={product.rating} />} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

// import useNewProducts from "../utils/use-new-products";

// const ProductCard = () => {
//   const { data: newProducts } = useNewProducts();
//   console.log(newProducts);
//   return (
//     <div>
//       {newProducts?.slice(0, 3).map((newProducts) => (
//         <div
//           key={newProducts._id}
//           className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
//           <figure>
//             <img src={newProducts.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <div className="badge badge-soft badge-secondary ">جدید</div>
//             <h2 className="card-title pt-2 ">{newProducts.name}</h2>
//             <p>{newProducts.description}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">
//                 {newProducts.category.name}
//               </div>
//               <div className="rating">
//                 <div className="mask mask-star" aria-label="1 star"></div>
//                 <div className="mask mask-star" aria-label="2 star"></div>
//                 <div
//                   className="mask mask-star"
//                   aria-label="3 star"
//                   aria-current="true"></div>
//                 <div className="mask mask-star" aria-label="4 star"></div>
//                 <div className="mask mask-star" aria-label="5 star"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;
