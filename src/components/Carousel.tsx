import type { productType } from "../types/productType";
import { products } from "../sampleData/productData";
import {
  IconStar,
  IconShoppingCart,
  IconBuildingStorefront,
  IconClock,
  IconChatBubble,
  IconArchiveBox,
} from "../icons/carouselIcons";

const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-200">
    {icon}
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

// Component for a single slide
const CarouselItem = ({ product }: { product: productType }) => {
  const formattedPrice = `${product.productPrice.toLocaleString(
    "fa-IR"
  )} تومان`;
  const formattedDate = product.productUpdateTime.toLocaleDateString("fa-IR");

  return (
    <div className="">
      <img
        src={product.productCardImage}
        alt={product.productName}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-30 p-6 flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-white">
          <div className="flex flex-col justify-end space-y-2">
            <h2 className="text-xl font-bold">{product.productName}</h2>
            <p className="text-sm text-gray-300">
              {product.productDescription}
            </p>
            <p className="text-lg font-bold">{formattedPrice}</p>
          </div>

          {/* Right Column with local SVG icons */}
          <div className="grid grid-cols-2 gap-4">
            <DetailItem
              icon={<IconStar />}
              label="امتیاز"
              value={product.productRate}
            />
            <DetailItem
              icon={<IconBuildingStorefront />}
              label="برند"
              value={product.productBrand}
            />
            <DetailItem
              icon={<IconShoppingCart />}
              label="تعداد"
              value={product.productAvailability}
            />
            <DetailItem
              icon={<IconClock />}
              label="بروزرسانی"
              value={formattedDate}
            />
            <DetailItem
              icon={<IconArchiveBox />}
              label="موجودی"
              value={product.productAvailability > 0 ? "موجود" : "ناموجود"}
            />
            <DetailItem
              icon={<IconChatBubble />}
              label="نظرات"
              value={product.productReviewCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// The main Carousel component
const Carousel = () => {
  const slideData = [
    { id: "slide1", product: products[0], prev: "#slide4", next: "#slide2" },
    { id: "slide2", product: products[0], prev: "#slide1", next: "#slide3" },
    { id: "slide3", product: products[0], prev: "#slide2", next: "#slide4" },
    { id: "slide4", product: products[0], prev: "#slide3", next: "#slide1" },
  ];

  return (
    <div className="carousel w-full">
      {slideData.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full">
          <CarouselItem product={slide.product} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={slide.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={slide.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
