import server from "./axios";
import type { loginPayload } from "../types/loginPayload";
import type { UserResponse } from "../types/user";

const login_URL = "/api/users/auth";

export async function loginFunction(
  payload: loginPayload
): Promise<UserResponse> {
  const response = await server.post<UserResponse>(login_URL, payload, {
    withCredentials: true,
  });
  return response.data;
}
