import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type {productType} from "../types/productType";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      server.get<productType[]>("/api/products/allproducts").then((res) => res.data),
  });
};

export default useProducts;
