import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedLocationRows from "./ExpandedLocationRows";

const { DateTime } = require("luxon");

const Locations = ({
  lists,
  setLists,
  bakeryItems,
  setBakeryItems,
  signedIn,
  listDateFilter,
  positionFilter,
}) => {
  const [expandedRows, setExpandedRows] = useState(null);


  let locationsForTheseItems = Array.from(
    new Set(
      bakeryItems
        .filter((ba) =>
          lists
            .filter((li) => listDateFilter ?
              li.listNeedDay.includes(
                DateTime.now().setZone("America/Los_Angeles").weekdayShort
              ) : li 
            )
            .filter((li) => positionFilter !== "na" ? li.assignedTo === positionFilter : li)
            .map((it) => it.listAffect)
            .includes(ba.actionType)
        )
        .map((it) => it.location)
    )
  ).map((lo) => ({ locationName: lo }));


  console.log(bakeryItems)
  console.log(lists)

  const rowExpansionTemplate = (data) => {
    return (
      <ExpandedLocationRows
        data={data}
        lists={lists}
        setLists={setLists}
        bakeryItems={bakeryItems}
        setBakeryItems={setBakeryItems}
        signedIn={signedIn}
        listDateFilter={listDateFilter}
        positionFilter={positionFilter}
      />
    );
  };

  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          value={locationsForTheseItems}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={(e) => rowExpansionTemplate(e)}
          dataKey="locationName"
          className="p-datatable-sm"
        >
          <Column expander style={{ width: "3em" }} />
          <Column field="locationName" header="Location Name" />
        </DataTable>
      </div>
    </div>
  );
};

export default Locations;
