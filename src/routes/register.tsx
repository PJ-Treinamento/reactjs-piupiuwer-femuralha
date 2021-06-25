import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Register from "../pages/Register";

const RegisterRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/reg'  component={Register} />
    </BrowserRouter>
  )
}

export default RegisterRoutes