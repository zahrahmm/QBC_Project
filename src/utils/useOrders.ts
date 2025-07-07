import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { userModel } from "../types/users";

const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      server.get<userModel[]>("/api/orders").then((res) => res.data),
  });
};

export default useOrders;
