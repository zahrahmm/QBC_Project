import type { regPayload } from "../types/RegPayload";
import server from "./axios";
import type { UserResponse } from "../types/user";

const Register_URL = "/api/users";

export async function register(Payload: regPayload) {
  try {
    const response = await server.post<UserResponse>(Register_URL, Payload);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
