import React, { useContext } from "react";

import FeedRoutes from "./feed";
import LoginRoutes from "./login";

import AuthContext from "../contexts/auth";

const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);
  
  return signed ? <FeedRoutes  /> : <LoginRoutes/>
}

export default Routes