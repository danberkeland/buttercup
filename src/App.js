import React from "react";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

import AppRoutes from "./AppRoutes";
import Nav from "./Nav";
import Loader from "./Loader";

import { ToggleProvider } from "./dataContexts/ToggleContext";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <ToggleProvider>
        <Loader />
        <Nav />

        <AppRoutes />
      </ToggleProvider>
    </div>
  );
}

export default withAuthenticator(App);
