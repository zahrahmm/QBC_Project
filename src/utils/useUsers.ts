import { useQuery } from "@tanstack/react-query";
import server from "./axios";
import type { userModel } from "../types/users";

const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      server.get<userModel[]>("/api/users").then((res) => res.data),
  });
};

export default useUsers;
