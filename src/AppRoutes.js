import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Baker1 from './pages/Baker1/baker1'
import Baker2 from './pages/Baker2/baker2'
import OrderList from './pages/OrderList/orderlist'
import EODCount from './pages/EODCount/eodcount'
import InvCount from './pages/InvCount/invcount'
import Settings from './pages/Settings/settings'



function AppRoutes() {

  return (
    <Router>
      <div className="bigPicture">
        <Switch>
          <Route path="/Baker1" component={Baker1} /> 
          <Route path="/Baker2" component={Baker2} /> 
          <Route path="/OrderList" component={OrderList} /> 
          <Route path="/EODCount" component={EODCount} /> 
          <Route path="/InvCount" component={InvCount} /> 
          <Route path="/Settings" component={Settings} /> 
         
        </Switch>
      </div>
    </Router>        
  );
}

export default AppRoutes;
