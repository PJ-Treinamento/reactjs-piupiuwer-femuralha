import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Landing from "../pages/Landing";
import Register from "../pages/Register";

const LoginRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/'  component={Landing} />
      <Route path='/'  component={Register} />
    </BrowserRouter>
  )
}

export default LoginRoutes