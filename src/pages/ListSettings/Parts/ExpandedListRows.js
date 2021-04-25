import React, { useState, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ExpandedListDetailRows from "./ExpandedListDetailRows";
import AddList from "./AddList";
import DeleteList from "./DeleteList";
import { ToggleContext } from "../../../dataContexts/ToggleContext";

const ExpandedListRows = ({ data, lists, setLists }) => {
  
  const [expandedRows, setExpandedRows] = useState(null);
  const { setIsLoading } = useContext(ToggleContext)
  const rowExpansionTemplate = (e) => {
    return <ExpandedListDetailRows data={e} lists={lists} setLists={setLists}/>;
  };

  const createListAffect = (e) => {
    return e.listAffect
  }

  return (
    <div className="delivDate-subtable">
      <DataTable
        value={lists.filter(li => li.listName === data.listName)}
        className="p-datatable-sm"
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="listAffect"
      >
        <Column headerStyle={{ width: "4rem" }}></Column>
        <Column expander style={{ width: "3em" }} />

        <Column field="listAffect" header="Sub List Name" body={e => createListAffect(e)}/>
        <Column
            headerStyle={{ width: "4rem" }}
            body={(e) => DeleteList(e.listAffect,data.listName,lists,setLists,setIsLoading)}
          ></Column>
      </DataTable>
      <AddList loc={data.listName} lists={lists} setLists={setLists}/>
    </div>
  );
};

export default ExpandedListRows
