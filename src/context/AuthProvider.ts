import React, { useEffect } from "react";

import { useAuthStore } from "../stores/useAuthStore";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const login = useAuthStore((state) => state.login);

  // Try to rehydrate auth state on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      login(JSON.parse(savedUser), savedToken);
    }
  }, [login]);

  return <>{children}</>;
};

export default AuthProvider;
