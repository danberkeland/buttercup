import React from 'react';

import { Menubar } from 'primereact/menubar';
import { AmplifySignOut } from '@aws-amplify/ui-react'


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




function Nav() {


   
   const items = [
      {label: 'Baker1', icon: 'pi pi-fw pi-chart-bar', command:()=>{ window.location="/Baker1"; }},
      {label: 'Baker2', icon: 'pi pi-fw pi-map', command:()=>{ window.location="/Baker2"; }},
      {label: 'OrderLists', icon: 'pi pi-fw pi-map', command:()=>{ window.location="/OrderLists"; }},
      {label: 'EODCount', icon: 'pi pi-fw pi-map', command:()=>{ window.location="/EODCount"; }},
      {label: 'InvCount', icon: 'pi pi-fw pi-shopping-cart', command:()=>{ window.location="/InvCount"; }},
      {label: 'Settings', icon: 'pi pi-fw pi-users', command:()=>{ window.location="/Settings"; }},
   ];



  return (
      <div className = "card">
         <React.Fragment>
         <Menubar model={items} />
         <AmplifySignOut /> 
         </React.Fragment>
         
         
      </div>          
  );
}

export default Nav;
