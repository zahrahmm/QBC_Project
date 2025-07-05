import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProductStore } from "../store/useProductStore";

type ProductData = {
  title: string;
  price: string;
  description: string;
  imageUrl?: string;
};

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchProducts, deleteProduct, updateProduct } = useProductStore();

  const [productData, setProductData] = useState<ProductData>({
    title: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [image, setImage] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(!!id);

  // گرفتن اطلاعات محصول اگر id وجود دارد
  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`https://qbc9.liara.run/api/products/${id}`).then((res) => {
        setProductData({
          title: res.data.title,
          price: res.data.price.toString(),
          description: res.data.description,
          imageUrl: res.data.imageUrl,
        });
        setLoading(false);
      });
    }
  }, [id]);

  // هندل حذف
  const handleDelete = async () => {
    if (!id) return;
    try {
      await axios.delete(`https://qbc9.liara.run/api/products/${id}`);
      deleteProduct(id);
      fetchProducts();
      navigate("/all-product");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // هندل ویرایش
  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    if (image) formData.append("image", image);

    try {
      const response = await axios.put(
        `https://qbc9.liara.run/api/products/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      updateProduct({
        productId: id!,
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        imageUrl: response.data.imageUrl,
      });
      fetchProducts();
      navigate("/all-product");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (loading) return <div>در حال بارگذاری...</div>;

  return (
    <div>
      <form
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
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
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
                value={productData.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
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
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            ></textarea>
          </fieldset>
          <div className="flex gap-8">{/* سایر فیلدها */}</div>
          <button
            type="button"
            className="btn btn-soft btn-success hover:text-white mb-5"
            onClick={handleUpdate}
          >
            بروزرسانی محصول
          </button>
          {id && (
            <button
              type="button"
              className="btn btn-soft btn-error hover:text-white mb-5 mr-3"
              onClick={handleDelete}
            >
              حذف محصول
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
