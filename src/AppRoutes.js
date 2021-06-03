import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BakerList from "./pages/BakerList/bakerList";
import CookList from "./pages/CookList/CookList";
import FOHList from "./pages/FOHList/FOHList";
import AMPrep from "./pages/AMPrep/AMPrep";
import Dessert from "./pages/Dessert/Dessert";
import OrderList from "./pages/OrderList/orderlist";
import EODCount from "./pages/EODCount/eodcount";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import Settings from "./pages/Settings/settings";
import ListSettings from "./pages/ListSettings/ListSettings";
import { AmplifySignOut } from "@aws-amplify/ui-react";

function AppRoutes() {
  return (
    <Router>
      <div className="bigPicture">
        <Switch>
          <Route exact path="/" component={BakerList} />
          <Route path="/BakerList" component={BakerList} />
          <Route path="/CookList" component={CookList} />
          <Route path="/FOHList" component={FOHList} />
          <Route path="/AMPrep" component={AMPrep} />
          <Route path="/Dessert" component={Dessert} />
          <Route path="/OrderList" component={OrderList} />
          <Route path="/EODCount" component={EODCount} />
          <Route path="/ShoppingList" component={ShoppingList} />
          <Route path="/Settings" component={Settings} />
          <Route path="/ListSettings" component={ListSettings} />
          <Route path="/SignOut" component={AmplifySignOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRoutes;
