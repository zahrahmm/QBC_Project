import React from "react";

type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  date: string;
  imageUrl: string;
  onView?: () => void; // اضافه شد
};

const AllProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  date,
  imageUrl,
  onView,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl w-[672px] h-[200px] rounded-[8px] p-2 flex flex-row flex-1/3 ">
      <div>
        <img src={imageUrl} alt={title} className="w-32 h-auto rounded-xl ml-4" />
      </div>
      <div className="card-body h-full flex">
        <span className="text-sm text-gray-500 item-self-end">{date}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 text-md">{description}</p>
        <div className="flex flex-cols-2 items-center space-x-15">
          <button
            className="btn btn-soft btn-secondary hover:text-white"
            onClick={onView}
          >
            <span>مشاهده بیشتر</span>
            <span>←</span>
          </button>
          <span className="text-l font-semibold item-self-end">{price} تومان</span>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;






// const AllProductCard = () => {
//   return (
//        <div className="card bg-base-100 shadow-xl w-[672px] h-[176px] rounded-[8px] p-2">
//          <div className="card-body h-full">
//            <h2 className="card-title">کارت اول</h2>
//            <p>محتوا</p>
//          </div>
//        </div>



//   )
// }

// export default AllProductCard