import React, { useState } from 'react'

import { InputText } from "primereact/inputtext";

import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  border: 1px solid lightgray;
  padding: 5px 10px;
  margin: 4px auto;
  box-sizing: border-box;
`;

function ExpandedIngredientDetailRows(data) {

  const [ pickedPar, setPickedPar] = useState(data.data.par);
  const [ pickedTrigger, setPickedTrigger] = useState(data.data.trigger);


  const setPick = () => {
    
  }

  
  return (
    <div>
      <div className="p-field">
        <label htmlFor="par" className="p-d-block">
          Par
        </label><br />
        <InputText
          id="par"
          aria-describedby="par"
          className="p-d-block"
          placeholder={pickedPar}
          onChange={(e) => setPickedPar(e.target.value)}
        /><br /><br />
        
      </div>
      <div className="p-field">
        <label htmlFor="trigger" className="p-d-block">
          Trigger
        </label><br />
        <InputText
          id="trigger"
          aria-describedby="trigger"
          className="p-d-block"
          placeholder={pickedTrigger}
          onChange={(e) => setPickedTrigger(e.target.value)}
        /><br /><br />
        
      </div>
    </div>
  );
}

export default ExpandedIngredientDetailRows;