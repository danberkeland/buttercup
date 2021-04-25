import React, { useContext } from "react";

import { Dropdown } from "primereact/dropdown";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { updateUpdateList } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const days = [
  { listNeedDay: "Monday"},
  { listNeedDay: "Tuesday"},
  { listNeedDay: "Wednesday"},
  { listNeedDay: "Thursday"},
  { listNeedDay: "Friday"},
  { listNeedDay: "Saturday"},
  { listNeedDay: "SUnday"},
];

const ampm = [
    { isAM: "AM"},
    { isAM: "PM"},
    
  ];

  const assigned = [
    { assignedTo: "Baker"},
    { assignedTo: "Cook"},
    { assignedTo: "Foh"},
    
  ];

function ExpandedListDetailRows({ data, lists, setLists }) {
  
  const { setIsLoading } = useContext(ToggleContext);

  const updateDBattr = async (id, attr, val) => {
    setIsLoading(true);
    let addDetails = {
      id: id,
      [attr]: val,
    };
    try {
      await API.graphql(
        graphqlOperation(updateUpdateList, { input: { ...addDetails } })
      );
      setIsLoading(false);
    } catch (error) {
      console.log("error on updating bakery items", error);
      setIsLoading(false);
    }
  };

  

  const handleStringChange = (e, attr) => {
    try {
      let listToModify = clonedeep(lists);
      let id = data.listName + data.listAffect;
      let ind = listToModify.findIndex(
        (inv) =>
          inv["listName"] === data.listName && inv["listAffect"] === data.listAffect
      );
      let val = e.target.value;
      listToModify[ind][attr] = val;
      updateDBattr(id, attr, val);

      setLists(listToModify);
    } catch {
      console.log("error updating lists.");
    }
  };

  
  return (
    <div>
      

      <Dropdown
        optionLabel="listNeedDay"
        optionValue="listNeedDay"
        value={data.listNeedDay}
        options={days}
        onChange={(e) => handleStringChange(e, "listNeedDay")}
        placeholder={
          !data.listNeedDay ? "Select updateList" : data.listNeedDay
        }
      />
      <br />
      <br />
      <Dropdown
        optionLabel="isAM"
        optionValue="isAM"
        value={data.isAM}
        options={ampm}
        onChange={(e) => handleStringChange(e, "isAM")}
        placeholder={
          !data.isAM ? "AM or PM check" : data.isAM
        }
      />
      <br />
      <br />
      <Dropdown
        optionLabel="assignedTo"
        optionValue="assignedTo"
        value={data.assignedTo}
        options={assigned}
        onChange={(e) => handleStringChange(e, "assignedTo")}
        placeholder={
          !data.assignedTo ? "Assigned To" : data.assignedTo
        }
      />
      <br />
      <br />
      
    </div>
  );
}

export default ExpandedListDetailRows;
