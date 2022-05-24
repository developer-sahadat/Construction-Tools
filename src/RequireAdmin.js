import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./Component/Shear/LoadingSpinner";
import auth from "./FirebaseInit/FirebaseInit";
import UseAdmin from "./Hook/UseAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [admin, adminLoading] = UseAdmin(user);
  if (loading || adminLoading) {
    return <LoadingSpinner />;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
