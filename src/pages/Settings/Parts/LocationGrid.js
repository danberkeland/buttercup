import React, { useState, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { ExpandedIngredientRows } from "./ExpandedIngredientRows";
import DeleteLocation from "./DeleteLocation";
import { ToggleContext } from "../../../dataContexts/ToggleContext";


const LocationGrid = ({
  locations,
  setLocations,
  bakeryItems,
  setBakeryItems,
}) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const { setIsModified } = useContext(ToggleContext)

  const rowExpansionTemplate = (data) => {
    return <ExpandedIngredientRows data={data} bakeryItems={bakeryItems} setBakeryItems={setBakeryItems}/>;
  };

  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          value={locations}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={e => rowExpansionTemplate(e)}
          dataKey="locationName"
          className="p-datatable-sm"
        >
          <Column expander style={{ width: "3em" }} />
          <Column field="locationName" header="location" />

          <Column
            headerStyle={{ width: "4rem" }}
            body={(e) => DeleteLocation(e.id,locations,setLocations,setIsModified)}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default LocationGrid;
