import React, { useContext } from "react";

import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { updateUpdateList } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const daySelectItems = [
  { label: "Monday", value: "Mon" },
  { label: "Tuesday", value: "Tue" },
  { label: "Wednesday", value: "Wed" },
  { label: "Thursday", value: "Thu" },
  { label: "Friday", value: "Fri" },
  { label: "Saturday", value: "Sat" },
  { label: "Sunday", value: "Sun" },
];

const ampm = [{ IsAM: "AM" }, { IsAM: "PM" }];

const assigned = [
  { assignedTo: "Baker" },
  { assignedTo: "Cook" },
  { assignedTo: "Foh" },
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
          inv["listName"] === data.listName &&
          inv["listAffect"] === data.listAffect
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
      <MultiSelect
        value={data.listNeedDay}
        options={daySelectItems}
        onChange={(e) => handleStringChange(e, "listNeedDay")}
      />

      <br />
      <br />
      <Dropdown
        optionLabel="IsAM"
        optionValue="IsAM"
        value={data.IsAM}
        options={ampm}
        onChange={(e) => handleStringChange(e, "IsAM")}
        placeholder={!data.IsAM ? "AM or PM check" : data.IsAM}
      />
      <br />
      <br />
      <Dropdown
        optionLabel="assignedTo"
        optionValue="assignedTo"
        value={data.assignedTo}
        options={assigned}
        onChange={(e) => handleStringChange(e, "assignedTo")}
        placeholder={!data.assignedTo ? "Assigned To" : data.assignedTo}
      />
      <br />
      <br />
    </div>
  );
}

export default ExpandedListDetailRows;
