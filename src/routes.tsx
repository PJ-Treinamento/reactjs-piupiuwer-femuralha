import React from "react";
import { BrowserRouter, Route} from 'react-router-dom'
import Feed from "./pages/Feed";
import Landing from "./pages/Landing";

function Routes(){
               return(
                              <BrowserRouter>
                                             <Route path='/'  exact component={Landing} />
                                             <Route path='/Feed' component={ Feed}/>
                              </BrowserRouter>
               )
}
export default Routes