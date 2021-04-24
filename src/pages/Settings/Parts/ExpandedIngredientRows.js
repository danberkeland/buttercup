import React, { useState, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedIngredientDetailRows from "./ExpandedIngredientDetailRows";
import AddIngredient from "./AddIngredient";
import DeleteIngredient from "./DeleteIngredient";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

export const ExpandedIngredientRows = ({ data, bakeryItems, setBakeryItems }) => {
  
  const [expandedRows, setExpandedRows] = useState(null);
  const { setIsLoading } = useContext(ToggleContext)
  const rowExpansionTemplate = (e) => {
    return <ExpandedIngredientDetailRows data={e} bakeryItems={bakeryItems} setBakeryItems={setBakeryItems}/>;
  };

  const createIngName = (e) => {
    let isComplete =""
    if (e.par===0 || e.actionType==='' || e.updateList===''){
      isComplete =" (incomplete)"
    }
    return e.ingName+isComplete
  }

  return (
    <div className="delivDate-subtable">
      <DataTable
        value={bakeryItems.filter(item => item.location === data.locationName)}
        className="p-datatable-sm"
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="ingName"
      >
        <Column headerStyle={{ width: "4rem" }}></Column>
        <Column expander style={{ width: "3em" }} />

        <Column field="ingName" header="Ingredient" body={e => createIngName(e)}/>
        <Column
            headerStyle={{ width: "4rem" }}
            body={(e) => DeleteIngredient(e.ingName,data.locationName,bakeryItems,setBakeryItems,setIsLoading)}
          ></Column>
      </DataTable>
      <AddIngredient loc={data.locationName} bakeryItems={bakeryItems} setBakeryItems={setBakeryItems}/>
    </div>
  );
};
