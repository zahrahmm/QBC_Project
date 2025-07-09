import { useNavigate } from "react-router-dom";
import useProducts from "../utils/use-products";
import useProductStore from "../stores/useProductStore";

const AllProduct = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useProducts();

  const setSelectedProductId = useProductStore(
    (state) => state.setSelectedProductId
  );

  if (isLoading)
    return (
      <div className="   text-center mt-10 ">
        در حال بارگذاری<span className="loading loading-dots loading-md"></span>
      </div>
    );
  if (isError)
    return (
      <div className=" text-center mt-10 ">خطا در بارگذاری اطلاعات محصول!</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center px-8 ">
      {products?.map((product) => (
        <div
          key={product._id}
          className="card bg-base-100 shadow-xl w-full max-w-[672px] h-[210px] rounded-[8px] p-2 flex flex-row"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-auto rounded-xl ml-4"
            />
          </div>
          <div className="card-body flex flex-col justify-between w-full gap-1">
            <span className="text-sm  self-end">{"add date"}</span>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className=" text-md ">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
              <button
                className="btn btn-secondary "
                onClick={() => {
                  setSelectedProductId(product._id);
                  navigate(`/edit-product/${product._id}`);
                }}
              >
                <span>مشاهده بیشتر</span>
                <span>←</span>
              </button>
              <span className="text-lg font-semibold">
                {product.price.toLocaleString()} تومان
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
