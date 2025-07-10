import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { orderModel } from "../types/orderModel";

const useOrders = () => {
  return useQuery({
    queryKey: ["ordersMine"],
    queryFn: () =>
      server.get<orderModel[]>("/api/orders/mine").then((res) => res.data),
  });
};

export default useOrders;
