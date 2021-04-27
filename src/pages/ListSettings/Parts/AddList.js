import React, { useContext, useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { createUpdateList } from "../../../graphql/mutations";

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

const AddList = ({ loc, lists, setLists }) => {
  const [pickedList, setPickedList] = useState("");
  const { setIsLoading } = useContext(ToggleContext);

  const createDBList = async (addDetails) => {
    try {
      await API.graphql(
        graphqlOperation(createUpdateList, { input: { ...addDetails } })
      );
      setIsLoading(false);
    } catch (error) {
      console.log("error on creating Update List", error);
      setIsLoading(false);
    }
  };

  const handleAddList = (e) => {
    setIsLoading(true);
    let listToModify = clonedeep(lists);
    let addDetails = {
      id: loc + pickedList,
      listName: loc,
      listAffect: pickedList,
      listNeedDay: ["Mon"],
      IsAM: "AM",
      assignedTo: "Baker",
      owner: "buttercupmb"
    };
    let checkItems = listToModify.map((li) => li.listAffect);
    try {
      !checkItems.includes(pickedList) && listToModify.push(addDetails);

      !checkItems.includes(pickedList) && createDBList(addDetails);

      setLists(listToModify);
      setPickedList("");
    } catch {
      console.log("error creating list");
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <BasicContainer>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded"
          value={pickedList}
          onClick={(e) => handleAddList(e)}
        ></Button>

        <span className="p-float-label">
          <InputText
            id="newList"
            value={pickedList}
            onChange={(e) => setPickedList(e.target.value)}
          />
          <label htmlFor="in">Add List</label>
        </span>
      </BasicContainer>
    </React.Fragment>
  );
};

export default AddList;
