import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Feed from "../pages/Feed";

const FeedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Feed} />
    </BrowserRouter>
  )
}

export default FeedRoutes;