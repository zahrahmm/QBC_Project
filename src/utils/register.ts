import server from "./axios";
import type { regPayload } from "../types/RegPayload";
import type { UserResponse } from "../types/user";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

// export async function register(Payload: regPayload) {
//   try {
//     const response = await server.post<UserResponse>(Register_URL, Payload);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

export const useRegister = () => {
  const navigate = useNavigate();
  const Register_URL = "/api/users";

  return useMutation({
    mutationFn: (credentials: regPayload) =>
      server
        .post<UserResponse>(Register_URL, credentials)
        .then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },

    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });
};
