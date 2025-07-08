import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { orderModel } from "../types/orderModel";

const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      server.get<orderModel[]>("/api/orders").then((res) => res.data),
  });
};

export default useOrders;
