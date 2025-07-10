

import { useQuery, useMutation } from "@tanstack/react-query";
import server from "./axios";
import useProductStore from "../stores/useProductStore";
import type { productType, category } from "../types/productType";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const navigate = useNavigate();
  const productId = useProductStore((state) => state.selectedProductId);


  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await server.get(`/api/products/${productId}`);
      return data as productType;
    },
    enabled: !!productId,
  });


  const { data: categories = [], isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await server.get("/api/category/categories");
      return data as category[];
    },
  });


  const updateProduct = useMutation({
    mutationFn: async (updatedProduct: FormData) => {
      const { data } = await server.put(
        `/api/products/${productId}`,
        updatedProduct,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return data;
    },
    onSuccess: () => {

      navigate("/allproducts");
    },
  });


  const deleteProduct = useMutation({
    mutationFn: async (id: string) => {
      await server.delete(`/api/products/${id}`);
    },
    onSuccess: () => {

      navigate("/allproducts");
    },
  });

  return {
    product,
    isLoading,
    isError,
    categories,
    isCategoriesLoading,
    updateProduct,
    deleteProduct,
  };
};

