import React, { useState } from "react";

import { InputText } from "primereact/inputtext";

const clonedeep = require("lodash.clonedeep");

function ExpandedIngredientDetailRows({ data, bakeryItems, setBakeryItems }) {
  const [pickedItem, setPickedItem] = useState();

  const handleNumberChange = (e, attr) => {
    if (e.code === "Enter") {
      let listToModify = clonedeep(bakeryItems);
      console.log(listToModify);
      let ind = listToModify.findIndex(
        (inv) =>
          inv["ingName"] === data.ingName && inv["location"] === data.location
      );
      console.log(e.target.value);
      listToModify[ind][attr] = Number(e.target.value);

      setBakeryItems(listToModify);
    } else {
      setPickedItem(e.value);
    }
  };

  const handleNumberBlur = (e, attr) => {
    let listToModify = clonedeep(bakeryItems);
    let ind = listToModify.findIndex(
      (inv) =>
        inv["ingName"] === data.ingName && inv["location"] === data.location
    );
    listToModify[ind][attr] = Number(e.target.value);

    setBakeryItems(listToModify);
  };

  const handleStringChange = (e, attr) => {
    if (e.code === "Enter") {
      let listToModify = clonedeep(bakeryItems);
      console.log(listToModify);
      let ind = listToModify.findIndex(
        (inv) =>
          inv["ingName"] === data.ingName && inv["location"] === data.location
      );
      console.log(e.target.value);
      listToModify[ind][attr] = e.target.value;

      setBakeryItems(listToModify);
    } else {
      setPickedItem(e.value);
    }
  };

  const handleStringBlur = (e, attr) => {
    let listToModify = clonedeep(bakeryItems);
    let ind = listToModify.findIndex(
      (inv) =>
        inv["ingName"] === data.ingName && inv["location"] === data.location
    );
    listToModify[ind][attr] = e.target.value;

    setBakeryItems(listToModify);
  };

  return (
    <div>
      <div className="p-field">
        <label htmlFor="par" className="p-d-block">
          Par
        </label>
        <br />
        <InputText
          id="par"
          aria-describedby="par"
          className="p-d-block"
          placeholder={Number(data.par)}
          onKeyUp={(e) => handleNumberChange(e, "par")}
          onBlur={(e) => handleNumberBlur(e, "par")}
        />
        <br />
        <br />
      </div>
      <div className="p-field">
        <label htmlFor="trigger" className="p-d-block">
          Trigger
        </label>
        <br />
        <InputText
          id="trigger"
          aria-describedby="trigger"
          className="p-d-block"
          placeholder={Number(data.trigger)}
          onKeyUp={(e) => handleNumberChange(e, "trigger")}
          onBlur={(e) => handleNumberBlur(e, "trigger")}
        />
        <br />
        <br />
      </div>
      <div className="p-field">
        <label htmlFor="actionType" className="p-d-block">
          Action Type
        </label>
        <br />
        <InputText
          id="actionType"
          aria-describedby="actionType"
          className="p-d-block"
          placeholder={data.actionType}
          onKeyUp={(e) => handleStringChange(e, "actionType")}
          onBlur={(e) => handleStringBlur(e, "actionType")}
        />
        <br />
        <br />
      </div>
      <div className="p-field">
        <label htmlFor="updateList" className="p-d-block">
          Update List
        </label>
        <br />
        <InputText
          id="updateList"
          aria-describedby="updateList"
          className="p-d-block"
          placeholder={data.updateList}
          onKeyUp={(e) => handleStringChange(e, "updateList")}
          onBlur={(e) => handleStringBlur(e, "updateList")}
        />
        <br />
        <br />
      </div>
    </div>
  );
}

export default ExpandedIngredientDetailRows;
