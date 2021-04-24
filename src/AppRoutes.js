import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import BakerList from './pages/BakerList/bakerList'
import CookList from './pages/CookList/CookList'
import FOHList from './pages/FOHList/FOHList'
import OrderList from './pages/OrderList/orderlist'
import EODCount from './pages/EODCount/eodcount'
import InvCount from './pages/InvCount/invcount'
import Settings from './pages/Settings/settings'
import ListSettings from './pages/ListSettings/ListSettings'
import { AmplifySignOut } from '@aws-amplify/ui-react'



function AppRoutes() {

  return (
    <Router>
      <div className="bigPicture">
        <Switch>
          <Route path="/BakerList" component={BakerList} /> 
          <Route path="/BakerList" component={CookList} /> 
          <Route path="/BakerList" component={FOHList} /> 
          <Route path="/OrderList" component={OrderList} /> 
          <Route path="/EODCount" component={EODCount} /> 
          <Route path="/InvCount" component={InvCount} /> 
          <Route path="/Settings" component={Settings} /> 
          <Route path="/ListSettings" component={ListSettings} /> 
          <Route path="/SignOut" component={AmplifySignOut} />
         
        </Switch>
      </div>
    </Router>        
  );
}

export default AppRoutes;
