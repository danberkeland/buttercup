import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedIngredientDetailRows from "./ExpandedIngredientDetailRows";
import AddIngredient from "./AddIngredient";

export const ExpandedIngredientRows = ({ bakeryItems }) => {
  console.log("Hello!")
  const [expandedRows, setExpandedRows] = useState(null);

  const rowExpansionTemplate = (e) => {
    return <ExpandedIngredientDetailRows data={e} />;
  };

  return (
    <div className="delivDate-subtable">
      <DataTable
        value={bakeryItems}
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
      <AddIngredient />
    </div>
  );
};
