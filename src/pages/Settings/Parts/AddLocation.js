import React, { useState, useContext } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

import { createLocation } from "../../../graphql/mutations";

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

const AddLocation = ({ locations, setLocations }) => {
  const [pickedLocation, setPickedLocation] = useState("");

  const { setIsLoading } = useContext(ToggleContext);

  const createLoc = async (addDetails) => {
    try {
      await API.graphql(
        graphqlOperation(createLocation, { input: { ...addDetails } })
      );
      setIsLoading(false)
    } catch (error) {
      console.log("error on creating Location", error);
      setIsLoading(false)
    }
  };

  const handleAddLocation = (e) => {
    setIsLoading(true)
    let locsToModify = clonedeep(locations);
    let addDetails = {
      id: pickedLocation,
      locationName: pickedLocation,
    };
    let checkLocs = locsToModify.map((locs) => locs.locationName);
    try {
      !checkLocs.includes(pickedLocation) && locsToModify.push(addDetails);

      !checkLocs.includes(pickedLocation) && createLoc(addDetails);

      setLocations(locsToModify);
      setPickedLocation("");
      
    } catch {
      console.log("error on location add.");
    }
  };

  return (
    <React.Fragment>
      <BasicContainer>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded"
          value={pickedLocation}
          onClick={(e) => handleAddLocation(e)}
        ></Button>

        <span className="p-float-label">
          <InputText
            id="newLocation"
            value={pickedLocation}
            onChange={(e) => setPickedLocation(e.target.value)}
          />
          <label htmlFor="in">Add Location</label>
        </span>
      </BasicContainer>
    </React.Fragment>
  );
};

export default AddLocation;
