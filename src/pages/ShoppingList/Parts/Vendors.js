import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedVendorRows from "./ExpandedVendorRows";

const { DateTime } = require("luxon");

const Vendors = ({
  lists,
  setLists,
  bakeryItems,
  setBakeryItems,
  signedIn,
}) => {
  const [expandedRows, setExpandedRows] = useState(null);

  let yesterday = DateTime.now()
    .setZone("America/Los_Angeles")
    .minus({ days: 1 }).weekdayShort;
  let todayLists = lists.filter((li) => li.listNeedDay.includes(yesterday));
  todayLists = todayLists.map((to) => to.listAffect);

  let vendors = Array.from(
    new Set(
      bakeryItems
        .filter(
          (ba) =>
            ba.updateList === "Shop" && todayLists.includes(ba.actionType)
        )
        .map((ve) => ve.actionType)
    )
  ).map((ve) => ({
    vendorName: ve,
  }));

  const rowExpansionTemplate = (data) => {
    return (
      <ExpandedVendorRows
        data={data}
        lists={lists}
        setLists={setLists}
        bakeryItems={bakeryItems}
        setBakeryItems={setBakeryItems}
      />
    );
  };

  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          value={vendors}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={(e) => rowExpansionTemplate(e)}
          dataKey="locationName"
          className="p-datatable-sm"
        >
          <Column expander style={{ width: "3em" }} />
          <Column field="vendorName" header="Vendor Name" />
        </DataTable>
      </div>
    </div>
  );
};

export default Vendors;
