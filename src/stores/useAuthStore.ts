import { create } from "zustand";
import type { UserResponse } from "../types/user";

type AuthState = {
  user?: UserResponse | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: UserResponse, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  token: null,
  isAuthenticated: false,

  login: (user, token) =>
    set(() => ({
      user,
      token,
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      token: null,
      isAuthenticated: false,
    })),
}));
