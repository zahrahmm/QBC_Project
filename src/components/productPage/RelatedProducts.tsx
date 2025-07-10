import { useNavigate } from "react-router";
import useProductStore from "../../stores/useProductStore";
import type { productType } from "../../types/productType";
import useProducts from "../../utils/use-products";

const RelatedProducts = ({
  categoryId,
  currentProductId,
  // onProductSelect,
}: {
  categoryId: string;
  currentProductId: string;
  onProductSelect?: (productId: string) => void;
}) => {
  const { data, isLoading } = useProducts();
  
  const setSelectedProductId = useProductStore(
    (state) => state.setSelectedProductId
  );
    const navigate = useNavigate();

   

  if (isLoading)
    return (
      <div className="mt-2 mr-5 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
        در حال بارگذاری محصولات مرتبط...
      </div>
    );

  if (!data || !categoryId) return null;

  const relatedProducts = data
    .filter(
      (p: productType) =>
        p.category._id === categoryId && p._id !== currentProductId
    )
    .slice(0, 3);
  console.log(relatedProducts);

  if (relatedProducts.length === 0)
    return (
      <div className="mt-2 mr-5 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
        محصول مرتبطی یافت نشد.
      </div>
    );

  // const handleProductClick = (id: string) => {
  //   if (onProductSelect) onProductSelect(id);
  // };

  return (
    <div  className="relative mt-6">
      <div className="flex space-x-4 pr-8 justify-start">
        {relatedProducts.map((item) => (
          <div
          onClick={() => {
                  setSelectedProductId(item._id);
                  navigate(`/product/${item._id}`);
                }}
            key={item._id}
            className="cursor-pointer min-w-[200px] card shadow-sm flex-shrink-0"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-44 h-44 rounded-lg object-cover"
              />
            </figure>
            <div className="card-body flex flex-row justify-between p-4">
              <h4 className="font-semibold text-sm">{item.name}</h4>
              <p className="badge badge-sm badge-secondary">
                {item.price.toLocaleString()} تومان
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
