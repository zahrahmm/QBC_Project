
import { useProduct } from "../utils/useCRUDproduct";
import { useEffect, useState, type ChangeEvent } from "react";
import type { productType } from "../types/productType";
import useProductStore from "../stores/useProductStore";
import { toast } from "sonner";

const EditProduct = () => {
  const productId = useProductStore((state) => state.selectedProductId);

  const {
    product,
    isLoading,
    isError,
    categories,
    isCategoriesLoading,
    updateProduct,
    deleteProduct,
  } = useProduct();

  const [productData, setProductData] = useState<Partial<productType>>({});
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setProductData({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        quantity: product.quantity,
        countInStock: product.countInStock,
      });
      if (product.image) {
        setImageSrc(product.image);
      }
    }
  }, [product]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading || isCategoriesLoading)
    return (
      <div className="text-center mt-10">
        در حال بارگذاری
        <span className="loading loading-dots loading-md mr-1"></span>
      </div>
    );
  if (isError)
    return <div className="text-center mt-10">خطا در بارگذاری اطلاعات محصول!</div>;

  return (
    <div className="m-auto max-w-[1090px] pt-26">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Preview"
            className="w-64 h-auto border rounded m-auto"
          />
        )}
        <input
          type="file"
          className="file-input w-full h-31"
          onChange={handleImageChange}
        />

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base font-normal">نام محصول</legend>
          <input
            type="text"
            className="input w-full"
            value={productData.name || ""}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
            id="name"
          />
        </fieldset>

        <div className="flex gap-8">
          <fieldset className="fieldset flex-1">
            <legend className="fieldset-legend text-base font-normal">قیمت</legend>
            <input
              type="number"
              className="input w-full"
              value={productData.price || ""}
              onChange={(e) =>
                setProductData({ ...productData, price: Number(e.target.value) })
              }
              id="price"
            />
          </fieldset>

          <fieldset className="fieldset flex-1">
            <legend className="fieldset-legend text-base font-normal">دسته‌بندی</legend>
            <select
              className="select w-full"
              value={productData.category?._id || ""}
              onChange={(e) => {
                const selected = categories.find(
                  (cat) => cat._id === e.target.value
                );
                if (selected) {
                  setProductData({ ...productData, category: selected });
                }
              }}
              id="category"
            >
              <option disabled value="">
                دسته‌بندی را انتخاب کنید
              </option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base font-normal">توضیحات</legend>
          <textarea
            className="textarea w-full"
            rows={5}
            value={productData.description || ""}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            id="description"
          />
        </fieldset>

        <div className="flex gap-8">
          <fieldset className="fieldset flex-1">
            <legend className="fieldset-legend text-base font-normal">
              تعداد قابل خرید
            </legend>
            <input
              type="number"
              className="input w-full"
              value={productData.quantity || ""}
              onChange={(e) =>
                setProductData({ ...productData, quantity: Number(e.target.value) })
              }
              id="quantity"
            />
          </fieldset>

          <fieldset className="fieldset flex-1">
            <legend className="fieldset-legend text-base font-normal">موجودی</legend>
            <select
              className="select w-full"
              value={productData.countInStock || ""}
              onChange={(e) =>
                setProductData({ ...productData, countInStock: Number(e.target.value) })
              }
              id="countInStock"
            >
              <option disabled value="">
                موجودی را وارد نمایید
              </option>
              <option value="5">+ ۵</option>
              <option value="10">+ ۱۰</option>
              <option value="20">+ ۲۰</option>
              <option value="30">+ ۳۰</option>
              <option value="40">+ ۴۰</option>
              <option value="50">+ ۵۰</option>
              <option value="100">+ ۱۰۰</option>
            </select>
          </fieldset>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="btn btn-success hover:text-white"
            onClick={() => {
              if (!productId || !productData.category?._id) {
                toast.error("شناسه محصول یا دسته‌بندی مشخص نیست.");
                return;
              }

              // اعتبارسنجی فیلدهای ضروری:
              const requiredFields: {
                key: keyof Partial<productType>;
                label: string;
              }[] = [
                  { key: "name", label: "نام محصول" },
                  { key: "price", label: "قیمت" },
                  { key: "description", label: "توضیحات" },
                  { key: "quantity", label: "تعداد قابل خرید" },
                  { key: "countInStock", label: "موجودی" },
                ];

              for (const field of requiredFields) {
                const value = productData[field.key];

                if (
                  value === undefined ||
                  value === null ||
                  (typeof value === "string" && value.trim() === "") ||
                  (typeof value === "number" && isNaN(value))
                ) {
                  toast.error(`لطفاً فیلد "${field.label}" را پر کنید.`);
                  return;
                }
              }

              const formData = new FormData();
              formData.append("name", productData.name || "");
              formData.append("price", String(productData.price || ""));
              formData.append("description", productData.description || "");
              formData.append("category", productData.category._id);
              formData.append("quantity", String(productData.quantity || ""));
              formData.append("countInStock", String(productData.countInStock || ""));
              if (image) formData.append("image", image);

              updateProduct.mutate(formData);
            }}
            disabled={updateProduct.isPending}
          >
            {updateProduct.isPending ? "در حال بروزرسانی..." : "بروزرسانی محصول"}
          </button>

          <button
            type="button"
            className="btn btn-error hover:text-white"
            onClick={() => {
              if (productId) {
                deleteProduct.mutate(productId);
              }
            }}
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
