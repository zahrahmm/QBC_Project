import { Navigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

const Home = () => {
  const { user } = useAuthStore();

  if (user?.isAdmin) return <Navigate to="/dashboard" />;

  return (
    <div>
      <h1>test Home</h1>
    </div>
  );
};

export default Home;
