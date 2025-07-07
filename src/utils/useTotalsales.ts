import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { totalsalesModel } from "../types/totalsalesModel";

const useTotalsales = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      server.get<totalsalesModel>("/api/orders/total-sales").then((res) => res.data),
  });
};

export default useTotalsales;
