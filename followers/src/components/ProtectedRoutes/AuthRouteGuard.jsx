import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRouteGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    //check user from local storage
    const user = localStorage.getItem("userinfo");
    const user1 = JSON.parse(user);
    if (!user1?._id) {
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthRouteGuard;
