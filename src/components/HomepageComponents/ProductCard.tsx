import { useNavigate } from "react-router";
import useFavoriteProducts from "../../stores/favouriteProductsStore";
import useProductStore from "../../stores/useProductStore";
import type { productType } from "../../types/productType";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import RenderRatingStar from "../productPage/RenderRatingStar";
import { persianCurrencyFormatter } from "../../models/PersianLocale";

interface Props {
  product: productType;
}

const ProductCard = ({ product }: Props) => {
  const { products: favoriteProducts, likeProduct, disLikeProduct } = useFavoriteProducts();
const setSelectedProductId = useProductStore(
    (state) => state.setSelectedProductId
  );
    const navigate = useNavigate();

   
  const isFavorite = favoriteProducts.some((p) => p._id === product._id);

  const handleLikeToggle = () => {
    if (isFavorite) {
      disLikeProduct(product._id);
    } else {
      likeProduct(product);
    }
  };

  return (
    <div className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
      <figure onClick={() => { 
      setSelectedProductId(product._id); 
      navigate(`/product/${product._id}`);}}  className="">
        <img className="w-80 h-70 object-cover rounded-2xl" src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
            <div className="badge badge-soft badge-secondary ">جدید</div>
            
            <div onClick={handleLikeToggle} className="cursor-pointer text-xl text-secondary">
                {isFavorite ? <BsHeartFill /> : <BsHeart />}
            </div>
        </div>
        <h2 className="card-title pt-2 ">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-soft badge-secondary ">
             {persianCurrencyFormatter.format(product.price) }
          </div>
          <div className="rating rating-xl rating-half flex-row-reverse">
              {RenderRatingStar(product.rating)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;






// import useFavoriteProducts from "../stores/favouriteProductsStore";
// import type { productType } from "../types/productType";
// import { BsHeart, BsHeartFill } from "react-icons/bs"; 

// interface Props {
//   product: productType;
// }


// const ProductCard = ({product}: Props) => {
//  const{likeProduct, disLikeProduct} = useFavoriteProducts()
//   return (
//     <div className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
//       <figure>
//         <img src={product.image} alt="Shoes" />
//       </figure>
//       <div className="card-body">
//         <div className="badge badge-soft badge-secondary ">جدید</div>
//         <h2 className="card-title pt-2 ">{product.name}</h2>
//         <p>{product.description}</p>
//         <div className="card-actions justify-between">
//           <div className="badge badge-outline">
//             {product.category.name}
//           </div>
//           <div className="rating">
//             <div className="mask mask-star" aria-label="1 star"></div>
//             <div className="mask mask-star" aria-label="2 star"></div>
//             <div
//               className="mask mask-star"
//               aria-label="3 star"
//               aria-current="true"
//             ></div>
//             <div className="mask mask-star" aria-label="4 star"></div>
//             <div className="mask mask-star" aria-label="5 star"></div>
//           </div>
//         </div>
//       </div>
//         </div>
//   );
// };

// export default ProductCard;






// import useNewProducts from "../utils/useNewProducts";

// const ProductCard = () => {
//   const { data: newProducts } = useNewProducts();
//   // console.log(newProducts);
//   return (
//     <div>
//       {newProducts?.map((newProducts) => (
//         <div key={newProducts._id} className="card max-sm:w-24 w-92 bg-base-100 shadow-sm">
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
//                   aria-current="true"
//                 ></div>
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
