import { Link } from "react-router";
import {
  CategoryIcon,
  IconArchiveBox,
  IconChatBubble,
  IconClock,
  IconShoppingCart,
  IconStar,
} from "../../assets/carouselIcons";
import type { productType } from "../../types/productType";
import { persianDateFormatter, persianCurrencyFormatter} from "../../models/PersianLocale";

const CardCarousel = (product: productType) => {
  return (
    <Link to={"/"}>
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="h-180 object-cover rounded-4xl ">
        <img className="" src={product.image} />
      </figure>
      <div className="card-body grid grid-cols-2 grid-rows-3">
        <section className="">
          <h2 className="card-title relative pb-6">
            {product.name}
            <div className="badge badge-soft badge-secondary absolute left-6">
              {persianCurrencyFormatter.format(product.price) }
            </div>
          </h2>
          <p>{product.description}</p>
        </section>
        <section className="grid grid-cols-2 ">
          <div className="inline-flex gap-2 pb-3">
            <IconStar />
            <h6>
              امتیاز : <span>{product.rating}</span>
            </h6>
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
              زمان بروزرسانی : <span>{persianDateFormatter.format(new Date(product.updatedAt))}</span>
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
    </Link>
    
  );
};

export default CardCarousel;
