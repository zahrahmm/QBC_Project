import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { totalsalesbydateModel } from "../types/totalsalesbydateModel";

const useTotalsalesByDate = () => {
  return useQuery({
    queryKey: ["Total"],
    queryFn: () =>
      server
        .get<totalsalesbydateModel[]>("/api/orders/total-sales-by-date")
        .then((res) => res.data),
  });
};

export default useTotalsalesByDate;
