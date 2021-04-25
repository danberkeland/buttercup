import React from "react";
import { Button } from "primereact/button";

import swal from "@sweetalert/with-react";

import { deleteBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const DeleteList = (listAffect,listName,lists,setLists,setIsLoading) => {

  const deleteCheck = (listAffect, listName, lists) => {
    swal({
      text:
        " Are you sure that you would like to permanently delete this ingredient?",
      icon: "warning",
      buttons: ["Yes", "Don't do it!"],
      dangerMode: true,
    }).then((willDelete) => {
      if (!willDelete) {
        deleteIngredientFinal(listAffect, listName, lists);
      } else {
        return;
      }
    });
  };

  const deleteDBList = async (id) => {
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

  const deleteIngredientFinal = (listAffect, listName, lists) => {
    setIsLoading(true)
    try{
    let itemsToModify = clonedeep(lists);
    itemsToModify = itemsToModify.filter(
      (item) => item["listAffect"] !== listAffect && item["listName"] === listName
    );
    setLists(itemsToModify);
    deleteDBList(listName+listAffect)
  } catch {
    console.log("error deleting list")
    setIsLoading(false)
  }
  };

  return (
    <Button
      icon="pi pi-trash"
      className="p-button-outlined p-button-rounded p-button-help p-button-sm"
      onClick={(e) => deleteCheck(listAffect, listName, lists)}
    />
  );
};

export default DeleteList