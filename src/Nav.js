import React from 'react';

import { Menubar } from 'primereact/menubar';



import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




function Nav() {


   
   const items = [
     {
       label: "Baker List",
       icon: "pi pi-fw pi-user",
       command: () => {
         window.location = "/BakerList";
       },
     },
     {
      label: "Cook List",
      icon: "pi pi-fw pi-user",
      command: () => {
        window.location = "/CookList";
      },
    },
    {
      label: "FOH List",
      icon: "pi pi-fw pi-user",
      command: () => {
        window.location = "/FOHList";
      },
    },
    {
      label: "AM Prep List",
      icon: "pi pi-fw pi-user",
      command: () => {
        window.location = "/AMPrep";
      },
    },
    {
      label: "Dessert Baker List",
      icon: "pi pi-fw pi-user",
      command: () => {
        window.location = "/Dessert";
      },
    },
     {
       label: "Order List",
       icon: "pi pi-fw pi-dollar",
       command: () => {
         window.location = "/OrderList";
       },
      
     },
     {
      label: "Shopping List",
      icon: "pi pi-fw pi-shopping-cart",
      command: () => {
        window.location = "/ShoppingList";
      },
     
    },
     {
       label: "EOD Count",
       icon: "pi pi-fw pi-sliders-h",
       command: () => {
         window.location = "/EODCount";
       },
     },
     
     {
       label: "Settings",
       icon: "pi pi-fw pi-cog",
       items: [
         {
           label: "Ingredients",
           icon: "pi pi-fw pi-tag",
           command: () => {
             window.location = "/Settings";
           },
         },
         {
           label: "Lists",
           icon: "pi pi-fw pi-book",
           command: () => {
            window.location = "/ListSettings";
          },
         },
       ],
     },
     {
       label: "Sign Out",
       icon: "pi pi-fw pi-sign-out",
       command: () => {
         window.location = "/SignOut";
       },
     },
   ];



  return (
      <div className = "card">
         <React.Fragment>
         <Menubar model={items} />
        
         </React.Fragment>
         
         
      </div>          
  );
}

export default Nav;
