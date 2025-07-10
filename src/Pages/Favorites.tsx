import ProductCard from "../components/HomepageComponents/ProductCard"
import useFavoriteProducts from "../stores/favouriteProductsStore"

const Favorites = () => {
    const favoriteProducts = useFavoriteProducts((state) => state.products)
    if (favoriteProducts.length === 0) {

    return(        
        <div className="flex flex-col gap-3 justify-center h-screen items-center">
        هنوز هیچ محصولی به علاقه‌مندی‌ها اضافه نشده است.
        </div>
    )    }
    return(
        <div className="grid grid-cols-4 px-22 py-22">
            {favoriteProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}</div>
    )
}

export default Favorites;