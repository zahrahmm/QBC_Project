import {
  CategoryIcon,
  IconArchiveBox,
  IconChatBubble,
  IconClock,
  IconShoppingCart,
  IconStar,
} from "../assets/carouselIcons";

const CardCarousel = () => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>

      <div className="card-body grid grid-cols-2 grid-rows-3">
        <section className="">
          <h2 className="card-title relative pb-6">
            Apple iPhone 14 Pro
            <div className="badge badge-secondary absolute left-6">
              ۱۰,۰۰۰ تومان
            </div>
          </h2>
          <p>
            آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است صفحه
            نمایش با فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه
            ...
          </p>
        </section>
        <section className="grid grid-cols-2 ">
          <div className="inline-flex gap-2 pb-3">
            <IconStar />
            <p>
              امتیاز : <span>5</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <CategoryIcon />
            <p>
              برند : <span>2</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <IconShoppingCart />
            <p>
              تعداد : <span>3</span>
            </p>
          </div>
          <div className="inline-flex gap-2 pb-3">
            <IconClock />
            <p>
              زمان بروزرسانی : <span>4</span>
            </p>
          </div>
          <div className="inline-flex gap-2">
            <IconArchiveBox />
            <p>
              موجودی : <span>5</span>
            </p>
          </div>
          <div className="inline-flex gap-2">
            <IconChatBubble />
            <p>
              نظرات : <span>6</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCarousel;
