import server from "./axios";
import { useMutation } from "@tanstack/react-query";
import type { loginPayload } from "../types/loginPayload";
import type { UserResponse } from "../types/user";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

// export async function loginFunction(
//   payload: loginPayload
// ): Promise<UserResponse> {
//   const response = await server.post<UserResponse>(login_URL, payload);
//   return response.data;
// }

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const login_URL = "/api/users/auth";

  return useMutation({
    mutationFn: (credentials: loginPayload) =>
      server.post<UserResponse>(login_URL, credentials).then((res) => res.data),

    onSuccess: (data) => {
      localStorage.setItem("id", data._id);
      localStorage.setItem("admin", JSON.stringify(data.isAdmin));
      login(data);
      navigate("/");
    },

    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });
};
