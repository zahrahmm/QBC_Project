import {
  CategoryIcon,
  IconArchiveBox,
  IconChatBubble,
  IconClock,
  IconShoppingCart,
  IconStar,
} from "../assets/carouselIcons";
import type { productType } from "../types/productType";

const CardCarousel = (product: productType) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="h-120">
        <img className="" src={product.image} />
      </figure>

      <div className="card-body grid grid-cols-2 grid-rows-3">
        <section className="">
          <h2 className="card-title relative pb-6">
            {product.name}
            <div className="badge badge-secondary absolute left-6">
              {product.price}
            </div>
          </h2>
          <p>{product.description}</p>
        </section>
        <section className="grid grid-cols-2 ">
          <div className="inline-flex gap-2 pb-3">
            <IconStar />
            <p>
              امتیاز : <span>{product.rating}</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <CategoryIcon />
            <p>
              برند : <span>{product.category.name}</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <IconShoppingCart />
            <p>
              تعداد : <span>{product.quantity}</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <IconClock />
            <p>
              زمان بروزرسانی :{" "}
              <span>{new Date(product.updatedAt).toLocaleDateString()}</span>
            </p>
          </div>
          <div className="inline-flex gap-2">
            <IconArchiveBox />
            <p>
              موجودی : <span>{product.countInStock}</span>
            </p>
          </div>
          <div className="inline-flex gap-2">
            <IconChatBubble />
            <p>
              نظرات : <span>{product.numReviews}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCarousel;
