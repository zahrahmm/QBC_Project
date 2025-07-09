import useProducts from "../../utils/useProducts";
import CardCarousel from "./CardCarousel";
import { useState } from "react";

const Carousel = () => {
  const { data: products } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction: "prev" | "next") => {
    if (!products) return;

    if (direction === "prev") {
      const newIndex =
        currentIndex === 0 ? products.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    } else {
      const newIndex =
        currentIndex === products.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };
  const currentProduct = products?.[currentIndex];

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        {currentProduct ? (
          <CardCarousel
            key={currentProduct._id}
            _id={currentProduct._id}
            name={currentProduct.name}
            image={currentProduct.image}
            quantity={currentProduct.quantity}
            category={currentProduct.category}
            description={currentProduct.description}
            rating={currentProduct.rating}
            numReviews={currentProduct.numReviews}
            price={currentProduct.price}
            countInStock={currentProduct.countInStock}
            reviews={currentProduct.reviews}
            createdAt={currentProduct.createdAt}
            updatedAt={currentProduct.updatedAt}
          />
        ) : (
          <div>Loading products...</div>
        )}
        <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => handleClick("prev")}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() => handleClick("next")}
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
