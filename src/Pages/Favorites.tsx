import ProductCard from "../components/HomepageComponents/ProductCard"
import useFavoriteProducts from "../stores/favouriteProductsStore"

const Favorites = () => {
    const favoriteProducts = useFavoriteProducts((state) => state.products)
    if (favoriteProducts.length === 0) {

    return(        
        <div>
        هنوز هیچ محصولی به علاقه‌مندی‌ها اضافه نشده است.
        </div>
    )    }
    return(
        <div>
            {favoriteProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}</div>
    )
}

export default Favorites;