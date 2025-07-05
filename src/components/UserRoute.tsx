import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

const UserRoute = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default UserRoute;
