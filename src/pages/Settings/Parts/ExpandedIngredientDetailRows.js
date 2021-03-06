import React, { useState, useContext } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { updateBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");



function ExpandedIngredientDetailRows({ data, bakeryItems, setBakeryItems, lists, setLists }) {
  const [pickedItem, setPickedItem] = useState();

  const { setIsLoading } = useContext(ToggleContext);

  const updateDBattr = async (id, attr, val) => {
    setIsLoading(true);
    let addDetails = {
      id: id,
      [attr]: val,
    };
    try {
      await API.graphql(
        graphqlOperation(updateBakeryItem, { input: { ...addDetails } })
      );
      setIsLoading(false);
    } catch (error) {
      console.log("error on updating bakery items", error);
      setIsLoading(false);
    }
  };

  const handleNumberChange = (e, attr) => {
    try {
      if (e.code === "Enter") {
        let listToModify = clonedeep(bakeryItems);
        let id = data.ingName + data.location;
        let ind = listToModify.findIndex(
          (inv) =>
            inv["ingName"] === data.ingName && inv["location"] === data.location
        );
        let val = Number(e.target.value);
        listToModify[ind][attr] = val;

        setBakeryItems(listToModify);
        updateDBattr(id, attr, val);
      } else {
        setPickedItem(e.value);
      }
    } catch {
      console.log("error updating attribute.");
    }
  };

  const handleNumberBlur = (e, attr) => {
    try {
      let listToModify = clonedeep(bakeryItems);
      let id = data.ingName + data.location;
      let ind = listToModify.findIndex(
        (inv) =>
          inv["ingName"] === data.ingName && inv["location"] === data.location
      );
      let val = Number(e.target.value);
      listToModify[ind][attr] = val;
      updateDBattr(id, attr, val);

      setBakeryItems(listToModify);
    } catch {
      console.log("error updating attribute");
    }
  };

  const handleStringChange = (e, attr) => {
    try {
      let listToModify = clonedeep(bakeryItems);
      let id = data.ingName + data.location;
      let ind = listToModify.findIndex(
        (inv) =>
          inv["ingName"] === data.ingName && inv["location"] === data.location
      );
      let val = e.target.value;
      listToModify[ind][attr] = val;
      updateDBattr(id, attr, val);

      setBakeryItems(listToModify);
    } catch {
      console.log("error updating attribute.");
    }
  };

  const reduceList = () => {
    let reducedList = lists.map((red) => red.listName);
    reducedList = new Set(reducedList);
    reducedList = Array.from(reducedList);
    reducedList = reducedList.map((red) => ({
      name: red,
      code: red,
    }));

    return reducedList;
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

      <Dropdown
        optionLabel="name"
        optionValue="name"
        value={data.updateList}
        options={reduceList()}
        onChange={(e) => handleStringChange(e, "updateList")}
        placeholder={
          data.updateList === "" ? "Select List of Actions" : data.updateList
        }
      />
      <br />
      <br />
      <Dropdown
        optionLabel="listAffect"
        optionValue="listAffect"
        disabled={data.updateList === "" ? true : false}
        value={data.updateList}
        options={lists.filter((li) => li.listName === data.updateList)}
        onChange={(e) => handleStringChange(e, "actionType")}
        placeholder={
          data.actionType === "" ? "Select Action or Vendor" : data.actionType
        }
      />
    </div>
  );
}

export default ExpandedIngredientDetailRows;
