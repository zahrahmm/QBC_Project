import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../utils/useProduct";
import type { productType } from "../types/productType";

const EditProduct = () => {
  const navigate = useNavigate();
  const { product, isLoading, isError, updateProduct, deleteProduct } =
    useProduct();

  const [productData, setProductData] = useState<Partial<productType>>({});
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (product) {
      setProductData({
        name: product.name,
        price: product.price,
        description: product.description,
      });
    }
  }, [product]);

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", productData.name || "");
    formData.append("price", String(productData.price || ""));
    formData.append("description", productData.description || "");
    if (image) formData.append("image", image);

    updateProduct.mutate(formData, {
      onSuccess: () => navigate("/all-product"),
    });
  };

  const handleDelete = () => {
    deleteProduct.mutate(undefined, {
      onSuccess: () => navigate("/all-product"),
    });
  };

  if (isLoading) return <div>در حال بارگذاری محصول...</div>;
  if (isError) return <div>خطا در بارگذاری محصول!</div>;

  return (
    <div className="m-auto max-w-[1090px] pt-26">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6"
      >
        <input
          type="file"
          className="file-input w-full h-31"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base font-normal">
            نام محصول
          </legend>
          <input
            type="text"
            className="input w-full"
            value={productData.name || ""}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base font-normal">
            قیمت
          </legend>
          <input
            type="number"
            className="input w-full"
            value={productData.price || ""}
            onChange={(e) =>
              setProductData({ ...productData, price: Number(e.target.value) })
            }
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base font-normal">
            توضیحات
          </legend>
          <textarea
            className="textarea w-full"
            rows={5}
            value={productData.description || ""}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
        </fieldset>

        <div className="flex gap-4">
          <button
            type="button"
            className="btn btn-success hover:text-white"
            onClick={handleUpdate}
            disabled={updateProduct.isPending}
          >
            {updateProduct.isPending
              ? "در حال بروزرسانی..."
              : "بروزرسانی محصول"}
          </button>

          <button
            type="button"
            className="btn btn-error hover:text-white"
            onClick={handleDelete}
            disabled={deleteProduct.isPending}
          >
            {deleteProduct.isPending ? "در حال حذف..." : "حذف محصول"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
