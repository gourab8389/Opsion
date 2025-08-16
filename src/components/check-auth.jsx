import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const CheckAuth = ({ children, protectedRoute }) => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (protectedRoute) {
      if (!token) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, protectedRoute]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default CheckAuth;
