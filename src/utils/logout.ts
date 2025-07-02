import server from "./axios";

const logout_URL = "/api/users/logout";

export async function logoutFunction() {
  const response = await server.post(logout_URL);
  return response.data;
}
