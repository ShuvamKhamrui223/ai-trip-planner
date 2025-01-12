import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
type ProtectorLayoutProps = {
  children: React.ReactNode;
};
const ProtectorLayout: React.FC<ProtectorLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, loadingAuth } = useAuthContext();
  // this useEffect checks authenticity of user, if the user exists only then redirects to boards page else sends to signin. it run everytime whenever this component mounts on the component tree and whenever value of AuthStatus or navigate property changes

  useEffect(() => {
    if (!loadingAuth && !user) navigate("/auth");
  }, [user]);

  return children;
};

export default ProtectorLayout;
