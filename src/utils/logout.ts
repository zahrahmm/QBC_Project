import server from "./axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

// export async function logoutFunction() {
//   await server.post(logout_URL);
// }

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const logout_URL = "/api/users/logout";

  return useMutation({
    mutationFn: () => server.post(logout_URL),

    onSuccess: () => {
      localStorage.removeItem("id");
      localStorage.removeItem("admin");
      logout();
      navigate("/login");
    },

    onError: (error) => {
      console.error("logout failed:", error.message);
    },
  });
};
