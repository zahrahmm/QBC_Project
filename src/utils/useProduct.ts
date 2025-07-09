
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import server from "./axios";
import useProductStore from "../stores/useProductStore";
import type { productType } from "../types/productType";


export const useProduct = () => {
  const queryClient = useQueryClient();
  const productId = useProductStore((state) => state.selectedProductId);

  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await server.get(`/api/products/${productId}`);
      return data as productType;
    },
    enabled: !!productId, 
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
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  
  const deleteProduct = useMutation({
    mutationFn: async () => {
      await server.delete(`/api/products/${productId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    product: data,
    isLoading,
    isError,
    updateProduct,
    deleteProduct,
  };
};
