import React from "react";
import { Button } from "primereact/button";

import swal from "@sweetalert/with-react";

const clonedeep = require("lodash.clonedeep");


export const DeleteLocation = (id, locations, setLocations) => {

    const deleteCheck = (id) => {
        swal({
          text:
            " Are you sure that you would like to permanently delete this location?",
          icon: "warning",
          buttons: ["Yes", "Don't do it!"],
          dangerMode: true,
        }).then((willDelete) => {
          if (!willDelete) {
            deleteLocationFinal(id);
          } else {
            return;
          }
        });
      };
      
      const deleteLocationFinal = (id) => {
        let locToModify = clonedeep(locations);
        locToModify = locToModify.filter((loc) => loc["id"] !== id);
        setLocations(locToModify);
      };
      
      
    return (
      <Button icon="pi pi-trash"
      className="p-button-outlined p-button-rounded p-button-help p-button-sm" onClick={(e) => deleteCheck(id)} />
    );
  };
  
  