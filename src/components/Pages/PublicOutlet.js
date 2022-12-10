import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const PublicOutlet = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Navigate to="/" /> : <Outlet />;
};
export default PublicOutlet;
