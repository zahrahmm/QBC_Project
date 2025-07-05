import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

const AdminRoute = () => {
  const { user } = useAuthStore();

  if (!user?.isAdmin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AdminRoute;
