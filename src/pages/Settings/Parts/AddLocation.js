import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styled from "styled-components";

const clonedeep = require("lodash.clonedeep");

const BasicContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: space-around;

  box-sizing: border-box;
`;

const AddLocation = ({ locations, setLocations }) => {
  const [pickedLocation, setPickedLocation] = useState();

  const handleAddLocation = (e) => {
    let locsToModify = clonedeep(locations);

    let checkLocs = locsToModify.map((locs) => locs.locationName);
    !checkLocs.includes(e.target.value) &&
      locsToModify.push({
        locationName: e.target.value,
      });
    setLocations(locsToModify);
    setPickedLocation("");
  };

  return (
    <React.Fragment>
      <BasicContainer>
        
          <Button value={pickedLocation} onClick={(e) => handleAddLocation(e)}>
            ADD LOCATION +
          </Button>

          <span className="p-float-label">
            <InputText
              id="newLocation"
              value={pickedLocation}
              onChange={(e) => setPickedLocation(e.target.value)}
            />
            <label htmlFor="in">New Location</label>
          </span>
        
      </BasicContainer>
    </React.Fragment>
  );
};

export default AddLocation;