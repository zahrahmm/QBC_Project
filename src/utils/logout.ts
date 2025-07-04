import server from "./axios";

const logout_URL = "/api/users/logout";

export async function logoutFunction() {
  await server.post(logout_URL);
}
