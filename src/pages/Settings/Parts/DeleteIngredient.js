import React from "react";
import { Button } from "primereact/button";

import swal from "@sweetalert/with-react";

import { deleteBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const DeleteIngredient = (id, location, bakeryItems, setBakeryItems, setIsLoading) => {

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

  const deleteDBBakeryItem = async (id) => {
    const deleteDetails = {
      id: id,
    };
    try {
      await API.graphql(
        graphqlOperation(deleteBakeryItem, { input: { ...deleteDetails } })
      );
      setIsLoading(false)
      
    } catch (error) {
      console.log("error on fetching Cust List", error);
      setIsLoading(false)
    }
  }

  const deleteIngredientFinal = (id, location, bakeryItems) => {
    setIsLoading(true)
    try{
    let itemsToModify = clonedeep(bakeryItems);
    itemsToModify = itemsToModify.filter(
      (item) => item["ingName"] !== id && item["location"] === location
    );
    setBakeryItems(itemsToModify);
    console.log(id+location)
    deleteDBBakeryItem(id+location)
  } catch {
    console.log("error deleting bakery item")
    setIsLoading(false)
  }
  };

  return (
    <Button
      icon="pi pi-trash"
      className="p-button-outlined p-button-rounded p-button-help p-button-sm"
      onClick={(e) => deleteCheck(id, location, bakeryItems)}
    />
  );
};

export default DeleteIngredient