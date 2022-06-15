import React, { useContext } from "react";

//context
import { AuthContext } from '../contexts/auth'

//routes
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { ...props } = useContext(AuthContext);

  return props.signed ? <AppRoutes /> : <AuthRoutes />;

}