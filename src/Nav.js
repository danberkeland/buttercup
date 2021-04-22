import React from 'react';

import { Menubar } from 'primereact/menubar';
import { AmplifySignOut } from '@aws-amplify/ui-react'


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




function Nav() {


   
   const items = [
      {label: 'BakerList', icon: 'pi pi-fw pi-user', command:()=>{ window.location="/BakerList"; }},
      {label: 'OrderList', icon: 'pi pi-fw pi-shopping-cart', command:()=>{ window.location="/OrderList"; }},
      {label: 'EODCount', icon: 'pi pi-fw pi-sliders-h', command:()=>{ window.location="/EODCount"; }},
      {label: 'InvCount', icon: 'pi pi-fw pi-tags', command:()=>{ window.location="/InvCount"; }},
      {label: 'Settings', icon: 'pi pi-fw pi-cog', command:()=>{ window.location="/Settings"; }},
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
