import React from 'react'
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

import AppRoutes from "./AppRoutes";
import Nav from "./Nav";

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRoutes />
    </div>
  );
}

export default withAuthenticator(App);
