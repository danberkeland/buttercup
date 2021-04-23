import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedIngredientDetailRows from "./ExpandedIngredientDetailRows";
import AddIngredient from "./AddIngredient";

export const ExpandedIngredientRows = ({ data, bakeryItems, setBakeryItems }) => {
 
  const [expandedRows, setExpandedRows] = useState(null);
  console.log(data)
  console.log(bakeryItems)
  const rowExpansionTemplate = (e) => {
    return <ExpandedIngredientDetailRows data={e}/>;
  };

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

        <Column field="ingName" header="Ingredient" />
      </DataTable>
      <AddIngredient loc={data.locationName} bakeryItems={bakeryItems} setBakeryItems={setBakeryItems}/>
    </div>
  );
};
