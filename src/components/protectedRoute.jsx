import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const ProtectedRout = ({ children }) => {
  const { user } = useAuth();
  if (!user.biz) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRout;
