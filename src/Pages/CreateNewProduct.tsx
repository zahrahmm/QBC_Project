import { useState } from "react";
import type { ChangeEvent } from "react";

const CreateNewProduct: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form action="" className="m-auto max-w-[1090px] pt-26">
        <h3 className="text-2xl font-medium mb-8">محصول جدید</h3>
        <div className="flex flex-col gap-6">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Preview"
              className="w-64 h-auto border rounded m-auto "
            />
          )}
          <input
            type="file"
            onChange={handleImageChange}
            className="file-input w-full h-31"
          />
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base font-normal">
              نام محصول
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="نام محصول را وارد نمایید"
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
              />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-base font-normal">
                برند
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="برند محصول را وارد نمایید"
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
            ></textarea>
          </fieldset>
          <div className="flex gap-8">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-base font-normal">
                تعداد قابل خرید
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="تعداد قابل خرید را وارد نمایید"
              />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-base font-normal">
                موجودی
              </legend>
              <select
                defaultValue="موجودی را وارد نمایید"
                className="select w-full"
              >
                <option disabled={true}>موجودی را وارد نمایید</option>
                <option>+ ۵</option>
                <option>+ ۱۰</option>
                <option>+ ۲۰</option>
                <option>+ ۳۰</option>
                <option>+ ۴۰</option>
                <option>+ ۵۰</option>
                <option>+ ۱۰۰</option>
              </select>
            </fieldset>
          </div>
          <button className="btn btn-soft btn-secondary">
            ساخت محصول جدید
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProduct;
