import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      axios.get("api/products/allproducts").then((rec) => {
        rec.data;
      });
    },
  });
};
export default useProducts;
