import React from "react";
import { Button } from "primereact/button";

import swal from "@sweetalert/with-react";

const clonedeep = require("lodash.clonedeep");


export const DeleteIngredient = (id, location, bakeryItems, setBakeryItems) => {

    const deleteCheck = (id, location, bakeryItems) => {
        swal({
          text:
            " Are you sure that you would like to permanently delete this ingredient?",
          icon: "warning",
          buttons: ["Yes", "Don't do it!"],
          dangerMode: true,
        }).then((willDelete) => {
          if (!willDelete) {
            deleteIngredientFinal(id, location, bakeryItems);
          } else {
            return;
          }
        });
      };
      
      const deleteIngredientFinal = (id, location, bakeryItems) => {
        let itemsToModify = clonedeep(bakeryItems);
        console.log(id)
        console.log(location)
        console.log(itemsToModify)
        itemsToModify = itemsToModify.filter((item) => item["ingName"] !== id && item["location"] === location);
        setBakeryItems(itemsToModify);
      };
      
      
    return (
      <Button icon="pi pi-trash"
      className="p-button-outlined p-button-rounded p-button-help p-button-sm" onClick={(e) => deleteCheck(id, location, bakeryItems)} />
    );
  };
  
  