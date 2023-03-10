import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
	const user = useSelector(state=>state.auth.userInfo);
	
	const location = useLocation();
	if(!user) return <Navigate to="/login" state={{ from: location }}  replace={true} />;
	return children;
};

export default PrivateRoute;
