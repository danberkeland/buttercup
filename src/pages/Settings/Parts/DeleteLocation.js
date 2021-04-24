import React from "react";
import { Button } from "primereact/button";

import swal from "@sweetalert/with-react";

import { deleteLocation } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const DeleteLocation = (id, locations, setLocations, setIsLoading) => {

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

  const deleteDBlocation = async (id) => {
    const deleteDetails = {
      id: id,
    };

    try {
      await API.graphql(
        graphqlOperation(deleteLocation, { input: { ...deleteDetails } })
      );
      setIsLoading(false)
      
    } catch (error) {
      console.log("error on fetching Cust List", error);
      setIsLoading(false)
    }
  }

  const deleteLocationFinal = (id) => {
    setIsLoading(true)
    try{
    let locToModify = clonedeep(locations);
    locToModify = locToModify.filter((loc) => loc["id"] !== id);
    setLocations(locToModify);
    deleteDBlocation(id)
  } catch {
    console.log("Error deleting location.")
    setIsLoading(false)
  }
  };

  return (
    <Button
      icon="pi pi-trash"
      className="p-button-outlined p-button-rounded p-button-help p-button-sm"
      onClick={(e) => deleteCheck(id)}
    />
  );
};

export default DeleteLocation
