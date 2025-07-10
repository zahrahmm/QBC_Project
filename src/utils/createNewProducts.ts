import server from "./axios";
import type { newProductPayload } from "../types/newProductPayload";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import type { productType } from "../types/productType";

export const useCreateNewProduct = () => {
  const navigate = useNavigate();
  const createNewProduct_URL = "/api/products";

  return useMutation({
    mutationFn: (product: newProductPayload) =>
      server
        .post<productType>(createNewProduct_URL, product)
        .then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
      alert("✅ محصول با موفقیت اضافه شد.");
      navigate("/allproducts");
    },

    onError: (error) => {
      alert("⚠️ خطا در افزودن محصول");
      console.error("Login failed:", error.message);
    },
  });
};
