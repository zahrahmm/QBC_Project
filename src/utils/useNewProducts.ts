import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { productType } from "../types/productType";

const useNewProducts = () => {
  return useQuery({
    queryKey: ["newProducts"],
    queryFn: () =>
      server
        .get<productType[]>("/api/products/sort/new")
        .then((res) => res.data),
  });
};

export default useNewProducts;
