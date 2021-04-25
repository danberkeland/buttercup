import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedListRows from "./ExpandedListRows";



const ListGrid = ({
  lists,
  setLists,
}) => {

  const [expandedRows, setExpandedRows] = useState(null);


  let baseLists = [
      {listName: "Baker"},
      {listName: "Cook"},
      {listName: "FOH"},
      {listName: "Order"},
      {listName: "Shop"},
  ]

  const rowExpansionTemplate = (data) => {
    return <ExpandedListRows data={data} lists={lists} setBakeryItems={setLists}/>;
  };

  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          value={baseLists}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={e => rowExpansionTemplate(e)}
          dataKey="listName"
          className="p-datatable-sm"
        >
          <Column expander style={{ width: "3em" }} />
          <Column field="listName" header="List Name" />

        </DataTable>
      </div>
    </div>
  );
};

export default ListGrid;
