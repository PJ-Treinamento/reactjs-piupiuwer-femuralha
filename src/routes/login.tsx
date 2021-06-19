import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Landing from "../pages/Landing";

const LoginRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/'  component={Landing} />
    </BrowserRouter>
  )
}

export default LoginRoutes