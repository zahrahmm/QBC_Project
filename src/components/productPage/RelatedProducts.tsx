// import type { Product } from "../../types/product";

// const RelatedProducts = ({
//   currentProduct,
//   allProducts,
// }: {
//   currentProduct: Product;
//   allProducts: Product[];
// }) => {
//   const relatedProducts = allProducts.filter(
//     (p) =>
//       p._id !== currentProduct._id &&
//       p.category?.name === currentProduct.category?.name
//   );

//   if (relatedProducts.length === 0) {
//     return (
//       <p className="mr-6 mt-2 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
//         محصول مرتبطی یافت نشد.
//       </p>
//     );
//   }

//   return (
//     <div className="relative mt-6">
//       <div className="flex overflow-x-auto space-x-4 scrollbar-hide pr-8">
//         {relatedProducts.map((product) => (
//           <div key={product._id} className="min-w-[200px]">
//             <div className="card bg-base-100 shadow-sm">
//               <figure>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-44 h-44 rounded-lg"
//                 />
//               </figure>
//               <div className="card-body flex flex-row justify-between">
//                 <h2 className="card-title text-sm">{product.name}</h2>
//                 <div className="badge badge-sm badge-secondary">
//                   {product.price.toLocaleString()} تومان
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* دکمه اسکرول به راست */}
//       <button
//         className="absolute top-1/2 -right-1 transform -translate-y-1/2 btn btn-sm btn-circle"
//         onClick={() =>
//           document
//             .querySelector(".overflow-x-auto")
//             ?.scrollBy({ left: 300, behavior: "smooth" })
//         }
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default RelatedProducts;
