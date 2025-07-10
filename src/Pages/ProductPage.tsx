import { useState, useEffect } from "react";
import axios from "axios";
import TabSelectorLeft from "../components/productPage/TabSelectorLeft";
import TabSelectorRight from "../components/productPage/TabSelectorRight";
import type { productType } from "../types/productType";
import RenderRatingStar from "../components/productPage/RenderRatingStar";
import { useCartStore } from "../stores/cartstore";
import { useAuthStore } from "../stores/useAuthStore";
import useProductStore from "../stores/useProductStore";

const ProductPage = () => {
  //   const { id } = useParams();
  const [product, setProduct] = useState<productType | null>(null);
  const productId = useProductStore((state) => state.selectedProductId);
  const [categoryName, setCategoryName] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"view" | "add" | "related">("add");
  const [addedProduct, setAddedProduct] = useState<number>(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    axios
      .get(`https://qbc9.liara.run/api/products/${productId}`)
      .then((res) => {
        setProduct(res.data);

        const categoryId =
          typeof res.data.category === "string"
            ? res.data.category
            : res.data.category._id;

        if (categoryId) {
          axios
            .get(`https://qbc9.liara.run/api/category/${categoryId}`)
            .then((catRes) => {
              setCategoryName(catRes.data.name);
            })
            .catch((err) =>
              console.error("Error fetching category name:", err)
            );
        }
      })
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product)
    return <div className="text-center text-xl">در حال بارگذاری...</div>;

  const formattedDate = new Date(product.updatedAt).toLocaleString("fa-IR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const addToCartHandler = () => {
    if (!isAuthenticated) {
      alert("لطفا ابتدا وارد شوید");
      return;
    }

    if (product && addedProduct <= product.countInStock) {
      addToCart(product, addedProduct);
      setProduct({
        ...product,
        countInStock: product.countInStock - addedProduct,
      });
    }
  };

  return (
    <div>
      <div className="card card-side w-5/6 mx-auto mb-6">
        <figure className="rounded-lg shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-cover rounded-lg m-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-6">{product.name}</h2>
          <p className="mb-6">{product.description}</p>
          <div className="text-right">
            <p className="mb-6 font-bold">
              {product.price.toLocaleString()} تومان
            </p>
            <div className="flex gap-20">
              <div>
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <span>امتیاز: {product.rating}</span>
                </p>
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>تعداد : </span> {product.quantity}
                </p>{" "}
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                  <span>موجودی :</span> {product.countInStock}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>
                  <span>برند : </span> {categoryName}
                </p>
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>زمان بروزرسانی :</span> {formattedDate}
                </p>
                <p className="mb-2 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  <span>نظرات :</span> {product.reviews.length}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="rating rating-sm rating-half flex-row-reverse">
              {RenderRatingStar(product.rating)}
            </div>

            <select
              value={addedProduct}
              onChange={(e) => setAddedProduct(Number(e.target.value))}
              className="select w-16 mr-16"
              disabled={product.countInStock === 0}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="card-actions mt-6">
            <button
              className="btn btn-secondary"
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
            >
              {product.countInStock === 0 ? "ناموجود" : "افزودن به سبد خرید"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5">
          <TabSelectorRight activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-4/5">
          <TabSelectorLeft
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            product={product}
            setProduct={setProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
