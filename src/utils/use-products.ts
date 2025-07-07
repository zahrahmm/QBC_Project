import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { productType } from "../types/productType";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      axios.get<productType[]>("/api/products/allproducts").then((res) => {
        res.data;
      });
    },
  });
};
export default useProducts;
