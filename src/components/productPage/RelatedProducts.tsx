import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { productType } from "../../types/productType";
import useProducts from "../../utils/use-products";

const RelatedProducts = ({
  categoryId,
  currentProductId,
}: {
  categoryId: string;
  currentProductId: string;
}) => {
  const { data, isLoading } = useProducts();
  const [relatedProducts, setRelatedProducts] = useState<productType[]>([]);

  useEffect(() => {
    console.log(" categoryId:", categoryId);
    console.log(" currentProductId:", currentProductId);
    console.log(" all products:", data);
    if (!data || !categoryId) return;

    const filtered = data.filter(
      (p: productType) =>
        p.category._id === categoryId && p._id !== currentProductId
    );
    console.log(" related products after filter:", filtered);
    setRelatedProducts(filtered);
  }, [data, categoryId, currentProductId]);

  if (isLoading)
    return (
      <div className="mt-2 mr-5 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
        در حال بارگذاری محصولات مرتبط...
      </div>
    );

  if (relatedProducts.length === 0)
    return (
      <div className="mt-2 mr-5 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
        محصول مرتبطی یافت نشد.
      </div>
    );

  return (
    <div className="relative mt-6">
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide pr-8">
        {relatedProducts.map((item) => (
          <Link
            to={`/products/${item._id}`}
            key={item._id}
            className="min-w-[200px] card bg-base-100 shadow-sm flex-shrink-0"
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
          </Link>
        ))}
      </div>

      <button
        className="absolute top-1/2 -right-1 transform -translate-y-1/2 btn btn-sm btn-circle"
        onClick={() =>
          document
            .querySelector(".overflow-x-auto")
            ?.scrollBy({ left: 300, behavior: "smooth" })
        }
      >
        ❯
      </button>
    </div>
  );
};

export default RelatedProducts;
