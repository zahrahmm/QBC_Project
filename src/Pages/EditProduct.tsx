import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductStore } from "../store/useProductStore";

type EditProductProps = {
  productId: string;
  productData: {
    title: string;
    price: string;
    description: string;
    image?: File;
  };
  onDeleted?: () => void;
  onUpdated?: () => void;
};

const EditProduct: React.FC<EditProductProps> = ({
  productId,
  productData,
  onDeleted,
  onUpdated,
}) => {
  const { deleteProduct, updateProduct } = useProductStore();

  const [title, setTitle] = useState(productData.title);
  const [price, setPrice] = useState(productData.price);
  const [description, setDescription] = useState(productData.description);
  const [image, setImage] = useState<File | undefined>(productData.image);

  useEffect(() => {
    setTitle(productData.title);
    setPrice(productData.price);
    setDescription(productData.description);
    setImage(productData.image);
  }, [productData]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://qbc9.liara.run/api/products/${productId}`);
      deleteProduct(productId);
      if (onDeleted) onDeleted();
    } catch (error) {
      console.error("خطا در حذف محصول", error);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(
        `https://qbc9.liara.run/api/products/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      updateProduct({
        productId,
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        imageUrl: response.data.imageUrl,
      });

      if (onUpdated) onUpdated();
    } catch (error) {
      console.error("خطا در بروزرسانی محصول:", error);
    }
  };

  return (
    <div>
      <form
        action=""
        className="m-auto max-w-[1090px] pt-26"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-6">
          <input
            type="file"
            className="file-input w-full h-31"
            onChange={(e) => setImage(e.target.files?.[0])}
          />
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base font-normal">
              نام محصول
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="نام محصول را وارد نمایید"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <div className="flex gap-8">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-base font-normal">
                قیمت
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="قیمت محصول را وارد نمایید"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base font-normal">
              توضیحات
            </legend>
            <textarea
              className="textarea w-full h-36 text-base font-normal"
              placeholder="توضیحات محصول را وارد نمایید"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </fieldset>
          <div className="flex gap-8">
            {/* سایر فیلدها */}
          </div>
          <button
            type="button"
            className="btn btn-soft btn-success hover:text-white mb-5"
            onClick={handleUpdate}
          >
            بروزرسانی محصول
          </button>
          <button
            type="button"
            className="btn btn-soft btn-error hover:text-white mb-5 mr-3"
            onClick={handleDelete}
          >
            حذف محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
