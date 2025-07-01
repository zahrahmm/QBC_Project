import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
  countInStock: number;
  category?: {
    name: string;
  };
  reviews: Review[];
  updatedAt: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://qbc9.liara.run/api/products/685ee105e700e7d8beb7b51a`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product)
    return <div className="text-center text-xl">در حال بارگذاری...</div>;

  return (
    <div className="card card-side w-5/6 mx-auto bg-base-100 shadow-sm">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-72 object-cover rounded-lg m-2"
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
              <p className="mb-2 text-sm">
                <span className="">امتیاز : </span> {product.rating}
              </p>{" "}
              <p className="mb-2 text-sm">
                <span>تعداد : </span> {product.quantity}
              </p>{" "}
              <p className="mb-2 text-sm">
                <span>موجودی :</span> {product.countInStock}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm">
                <span>برند :</span> {product.category?.name}
              </p>
              <p className="mb-2 text-sm">
                <span>زمان بروزرسانی :</span> {product.updatedAt}
              </p>
              <p className="mb-2 text-sm">
                <span>نظرات :</span> {product.reviews.length}
              </p>
            </div>
          </div>
        </div>
        <div className="card-actions mt-6">
          <button className="btn btn-secondary">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
