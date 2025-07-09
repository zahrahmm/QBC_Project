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

const fetchCategories = () =>
  server.get("api/category/categories").then((res) => res.data);

const CreateNewProduct: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState("");
  const [editMode, setEditMode] = useState<{ id: string; name: string } | null>(
    null
  );

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { mutate: createCategory } = useCreateCategory();
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
    if (confirm("آیا از حذف این دسته‌بندی مطمئن هستید؟")) {
      deleteCategory(id);
    }
  };

  const [formData, setFormData] = useState<newProductPayload>({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity: 0,
    image: "",
  });

  const { mutate } = useUploadImage();

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
      setSelectedFile(file);
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return alert("لطفا یک تصویر انتخاب کنید");

    const imageForm = new FormData();
    imageForm.append("image", selectedFile);

    mutate(imageForm, {
      onSuccess: (uploadedImageUrl: string) => {
        const newProduct = {
          ...formData,
          image: uploadedImageUrl,
        };

        console.log("📦 Final product payload:", newProduct);
        // 👉 TODO: send newProduct to your product creation endpoint here
      },
    });
  };

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
            onChange={handleImageChange}
            className="file-input w-full h-31"
          />
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
            {/* <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">برند</legend>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input w-full"
                placeholder="برند محصول را وارد نمایید"
              />
            </fieldset> */}
            <div className="max-w-xl mx-auto py-10">
              <h2 className="text-2xl font-semibold mb-6">
                مدیریت دسته‌بندی‌ها
              </h2>

              {/* Create Category */}
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="نام دسته‌بندی جدید"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-secondary" onClick={handleCreate}>
                  افزودن
                </button>
              </div>

              {/* List Categories */}
              {isLoading ? (
                <div>در حال بارگذاری...</div>
              ) : (
                <ul className="space-y-4">
                  {categories?.map((cat: { _id: string; name: string }) => (
                    <li
                      key={cat._id}
                      className="flex items-center justify-between bg-base-200 p-4 rounded"
                    >
                      {editMode?.id === cat._id ? (
                        <div className="flex gap-2 w-full">
                          <input
                            type="text"
                            value={editMode.name}
                            onChange={(e) =>
                              setEditMode({ ...editMode, name: e.target.value })
                            }
                            className="input input-bordered w-full"
                          />
                          <button
                            className="btn btn-primary"
                            onClick={handleEditSave}
                          >
                            ذخیره
                          </button>
                          <button
                            className="btn btn-ghost"
                            onClick={() => setEditMode(null)}
                          >
                            لغو
                          </button>
                        </div>
                      ) : (
                        <>
                          <span>{cat.name}</span>
                          <div className="flex gap-2">
                            <button
                              className="btn btn-sm btn-outline btn-info"
                              onClick={() => handleEdit(cat._id, cat.name)}
                            >
                              ویرایش
                            </button>
                            <button
                              className="btn btn-sm btn-outline btn-error"
                              onClick={() => handleDelete(cat._id)}
                            >
                              حذف
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
                onChange={handleChange}
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
            disabled={isLoading}
            className="btn btn-soft btn-secondary"
          >
            {isLoading ? "در حال آپلود تصویر..." : "ساخت محصول جدید"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProduct;
