/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (!user && !isAdmin) {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
