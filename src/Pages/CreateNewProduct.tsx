import { useState } from "react";
import { useUploadImage } from "../utils/uploadImage";
import type { newProductPayload } from "../types/newProductPayload";
import { useQuery } from "@tanstack/react-query";
import {
  useCreateCategory,
  useEditCategory,
  useDeleteCategory,
} from "../utils/useCategoryApi";
import server from "../utils/axios";
import { useCreateNewProduct } from "../utils/createNewProducts";

const CreateNewProduct: React.FC = () => {
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error" | "uploading"
  >("idle");

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState("");
  const [editMode, setEditMode] = useState<{ id: string; name: string } | null>(
    null
  );
  const { mutate: CreateProduct, isPending: Pending } = useCreateNewProduct();

  const fetchCategories = () =>
    server.get("api/category/categories").then((res) => res.data);
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { mutate: createCategory, isPending } = useCreateCategory();
  const { mutate: editCategory } = useEditCategory();
  const { mutate: deleteCategory } = useDeleteCategory();

  const handleCreate = () => {
    if (!newCategory.trim()) return;
    createCategory({ name: newCategory });
    setNewCategory("");
  };

  const handleEdit = (id: string, name: string) => {
    setEditMode({ id, name });
  };

  const handleEditSave = () => {
    if (editMode && editMode.name.trim()) {
      editCategory({ id: editMode.id, data: { name: editMode.name } });
      setEditMode(null);
    }
  };

  const handleDelete = (id: string) => {
    deleteCategory(id);
  };

  const [formData, setFormData] = useState<newProductPayload>({
    name: "",
    description: "",
    price: 100000,
    category: "",
    quantity: 5,
    image: "",
  });

  const { mutate: UploadImage } = useUploadImage();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadStatus("uploading");

      UploadImage(file, {
        onSuccess: (data) => {
          console.log("Uploaded!", data);
          setImageSrc(URL.createObjectURL(file));
          setUploadStatus("success");
          setFormData((prev) => ({
            ...prev,
            image: data.image, // set image from response
          }));
        },
        onError: (error) => {
          console.error("Upload failed:", error);
          setUploadStatus("error");
          console.error("خطا در آپلود تصویر:", error);
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image || !formData.category || !formData.name.trim()) {
      alert("لطفاً تمام فیلدهای الزامی را پر کنید.");
      return;
    }

    CreateProduct(formData, {
      onSuccess: (data) => {
        alert("✅ محصول با موفقیت اضافه شد.");
        console.log("Uploaded!", data);
        setFormData({
          name: "",
          description: "",
          price: 0,
          category: "",
          quantity: 0,
          image: "",
        });
        setImageSrc(null);
        setUploadStatus("idle");
      },
      onError: (error) => {
        console.error("Error creating product:", error);
        alert("⚠️ خطا در افزودن محصول");
      },
    });
  };
  // console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-auto max-w-[1090px] py-26">
        <h3 className="text-2xl font-medium mb-8">محصول جدید</h3>
        <div className="flex flex-col gap-6">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Preview"
              className="w-64 h-auto border rounded m-auto"
            />
          )}
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            className="file-input w-full h-31"
          />
          {uploadStatus === "uploading" && (
            <span className="text-blue-500">در حال آپلود...</span>
          )}
          {uploadStatus === "success" && (
            <span className="text-green-500">✅</span>
          )}
          {uploadStatus === "error" && (
            <span className="text-red-500">⚠️ خطا در آپلود</span>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">نام محصول</legend>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input w-full"
              placeholder="نام محصول را وارد نمایید"
            />
          </fieldset>
          <div className="flex gap-8">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">قیمت</legend>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input w-full"
                placeholder="قیمت محصول را وارد نمایید"
              />
            </fieldset>
            {/* Create Category */}
            <fieldset className="fieldset flex gap-2">
              <legend className="fieldset-legend">ایجاد برند</legend>

              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="نام برند جدید"
                className="input input-bordered w-full"
              />
              <button
                type="button"
                className="btn btn-secondary"
                disabled={isPending}
                onClick={handleCreate}
              >
                افزودن
              </button>
            </fieldset>
            {/* List Categories */}
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">لیست برندها</legend>
              {isLoading ? (
                <div>در حال بارگذاری...</div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {categories
                    ?.filter((cat) =>
                      formData.category ? cat._id === formData.category : true
                    )
                    .map((cat) => (
                      <div
                        key={cat._id}
                        className="flex items-center justify-between gap-2 p-2 rounded border bg-base-100"
                      >
                        {editMode?.id === cat._id ? (
                          <input
                            value={editMode?.name}
                            onChange={(e) =>
                              setEditMode({
                                ...editMode!,
                                name: e.target.value,
                              })
                            }
                            className="input input-sm flex-1"
                          />
                        ) : (
                          <span
                            className="cursor-pointer flex-1 text-right"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                category: cat._id,
                              }))
                            }
                          >
                            {cat.name}
                          </span>
                        )}
                        {!formData.category && (
                          <div className="flex gap-1">
                            {editMode?.id === cat._id ? (
                              <button
                                type="button"
                                className="btn btn-xs btn-success"
                                onClick={handleEditSave}
                              >
                                ذخیره
                              </button>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="btn btn-xs btn-info"
                                  onClick={() => handleEdit(cat._id, cat.name)}
                                >
                                  ویرایش
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-xs btn-error"
                                  onClick={() => handleDelete(cat._id)}
                                >
                                  حذف
                                </button>
                              </>
                            )}
                          </div>
                        )}
                        {formData.category && (
                          <button
                            type="button"
                            className="btn btn-xs btn-outline"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, category: "" }))
                            }
                          >
                            نمایش همه برندها
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">توضیحات</legend>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea w-full h-36"
              placeholder="توضیحات محصول را وارد نمایید"
            />
          </fieldset>
          <div className="flex gap-8">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">تعداد قابل خرید</legend>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="input w-full"
                placeholder="تعداد قابل خرید را وارد نمایید"
              />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">موجودی</legend>
              <select
                name="countInStock"
                className="select w-full"
                defaultValue=""
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
          <button
            type="submit"
            // disabled={Pending || !formData.image}
            // disabled={Pending}
            className="btn btn-soft btn-secondary"
          >
            اضافه کردن محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProduct;
