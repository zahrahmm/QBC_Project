import { create } from "zustand";
import type { UserResponse } from "../types/user";

type AuthState = {
  user?: UserResponse | null;
  isAuthenticated: boolean;
  login: (user: UserResponse) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (user) =>
    set(() => ({
      user,
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));
