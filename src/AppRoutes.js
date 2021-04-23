import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import BakerList from './pages/BakerList/bakerList'
import OrderList from './pages/OrderList/orderlist'
import EODCount from './pages/EODCount/eodcount'
import InvCount from './pages/InvCount/invcount'
import Settings from './pages/Settings/settings'
import { AmplifySignOut } from '@aws-amplify/ui-react'



function AppRoutes() {

  return (
    <Router>
      <div className="bigPicture">
        <Switch>
          <Route path="/BakerList" component={BakerList} /> 
          <Route path="/OrderList" component={OrderList} /> 
          <Route path="/EODCount" component={EODCount} /> 
          <Route path="/InvCount" component={InvCount} /> 
          <Route path="/Settings" component={Settings} /> 
          <Route path="/SignOut" component={AmplifySignOut} />
         
        </Switch>
      </div>
    </Router>        
  );
}

export default AppRoutes;
