import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../auth/auth";

export const AuthCheck = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!Auth.isLoggedIn()) {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
};
