// import useNavItem from "../stores/nav-item-store";
// import { useEffect } from "react";
import ProductCard from "../components/HomepageComponents/ProductCard";
import useFavoriteProducts from "../stores/favouriteProductsStore";

const Favorites = () => {
//   const changeNavItem = useNavItem((state) => state.changeNavItem);
//   const products = useFavoriteProducts((state) => state.products);
  const { products} = useFavoriteProducts((state) => state.products);


  

  return products.length > 0 ? (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  ) : (
    <div>
      <div>محصول مورد علاقه ای وجود ندارد. </div>
    </div>
  );
};

export default Favorites;

// import ProductCard from "../components/HomepageComponents/ProductCard";
// import useFavoriteProducts from "../stores/favouriteProductsStore";
// import type { productType } from "../types/productType";


// const Favorite = () => {
//     const { products: favoriteProducts, likeProduct, disLikeProduct } = useFavoriteProducts();
//     const isFavorite = favoriteProducts.some((p) => p._id === product._id);

//     return (
//         <div>

//         </div>
       
//     )
// }
// export default Favorite;