import React, { useContext, useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { createBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";


const clonedeep = require("lodash.clonedeep");

const BasicContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: auto;
  justify-content: space-around;

  box-sizing: border-box;
`;

const AddIngredient = ({ loc, bakeryItems, setBakeryItems }) => {
  const [pickedItem, setPickedItem] = useState("");
  const { setIsLoading } = useContext(ToggleContext)


  const createDBIngredient = async (addDetails) => {
    try {
      await API.graphql(
        graphqlOperation(createBakeryItem, { input: { ...addDetails } })
      );
      setIsLoading(false)
    } catch (error) {
      console.log("error on creating Bakery Item", error);
      setIsLoading(false)
    }
  };

  const handleAddItem = (e) => {
    setIsLoading(true)
    let itemsToModify = clonedeep(bakeryItems);
    let addDetails = {
      id: pickedItem + loc,
      par: 0,
      ingName: pickedItem,
      trigger: 100,
      actionDescrip: "",
      actionType: "",
      updateList: "",
      location: loc,
    };
    let checkItems = itemsToModify.map((items) => items.ingName);
    try {
      !checkItems.includes(pickedItem) && itemsToModify.push(addDetails);

      !checkItems.includes(pickedItem) && createDBIngredient(addDetails);

      setBakeryItems(itemsToModify);
      setPickedItem("");
      
    } catch {
      console.log("error creating ingredient");
      setIsLoading(false)
    }
  };

  return (
    <React.Fragment>
      <BasicContainer>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded"
          value={pickedItem}
          onClick={(e) => handleAddItem(e)}
        ></Button>

        <span className="p-float-label">
          <InputText
            id="newLocation"
            value={pickedItem}
            onChange={(e) => setPickedItem(e.target.value)}
          />
          <label htmlFor="in">Add Ingredient</label>
        </span>
      </BasicContainer>
    </React.Fragment>
  );
};

export default AddIngredient;
