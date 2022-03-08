import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
  user: any;
}

const ProtectedRoute = () => {
  const {
    user: { isAuthenticated, token },
  } = useSelector((state: RootState) => state);

  return isAuthenticated || token !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
