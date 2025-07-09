import server from "./axios";
import type { newProductPayload } from "../types/newProductPayload";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useCreateNewProduct = () => {
  const navigate = useNavigate();
  const createNewProduct_URL = "api/products";

  return useMutation({
    mutationFn: (product: newProductPayload) =>
      server.post(createNewProduct_URL, product).then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
      //   navigate("/allproducts");
    },

    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });
};
