import React from "react";
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
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    if (productData.image) {
      formData.append("image", productData.image);
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
    <form className="m-auto max-w-[1090px] pt-26" onSubmit={(e) => e.preventDefault()}>
      
      <div className="flex gap-2">
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
  );
};

export default EditProduct;
