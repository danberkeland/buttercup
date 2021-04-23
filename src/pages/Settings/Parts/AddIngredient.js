import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";

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
  const [pickedItem, setPickedItem] = useState('');


  const handleAddItem = (e) => {
  
    let itemsToModify = clonedeep(bakeryItems);
  
    let checkItems = itemsToModify.map((items) => items.ingName);
    
    !checkItems.includes(pickedItem) &&
      itemsToModify.push({
        id: pickedItem+loc,
        par: 0,
        ingName: pickedItem,
        trigger: 100,
        actionDescrip: "",
        actionType: "",
        updateList: "",
        location: loc
      });

   
    setBakeryItems(itemsToModify);
    setPickedItem("");
  };

  return (
    <React.Fragment>
      <BasicContainer>
        
          <Button icon="pi pi-plus" className="p-button-rounded" value={pickedItem} onClick={(e) => handleAddItem(e)}>
            
          </Button>

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
