import React, { useState, useContext } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

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
  const [pickedLocation, setPickedLocation] = useState('');

  const { setIsModified } = useContext(ToggleContext)

  const handleAddLocation = (e) => {
    let locsToModify = clonedeep(locations);
   
    let checkLocs = locsToModify.map((locs) => locs.locationName);
    !checkLocs.includes(pickedLocation) &&
      locsToModify.push({
        id: pickedLocation,
        locationName: pickedLocation,
      });
    setLocations(locsToModify);
    setPickedLocation("");
    setIsModified(true)
  };

  return (
    <React.Fragment>
      <BasicContainer>
        
          <Button icon="pi pi-plus" className="p-button-rounded" value={pickedLocation} onClick={(e) => handleAddLocation(e)}>
            
          </Button>

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
