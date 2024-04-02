import useAth from "./contexts/authProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProtectedRout({ children }) {
  const { isAuthenticated } = useAth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRout;
