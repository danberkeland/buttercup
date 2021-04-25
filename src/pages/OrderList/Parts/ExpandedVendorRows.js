import React, { useState, useEffect } from "react";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
import us from "timeago.js/lib/lang/en_US";
import { Checkbox } from "primereact/checkbox";
import styled from "styled-components";

import { updateBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const Ingredient = styled.div`
  font-weight: bold;
`;

const IngDetails = styled.div`
  font-size: 0.9em;
`;

const ListGrid = styled.div`
  
  display: grid;
  justify-items:center;
  grid-template-columns: 1fr 1fr;
`;
function ExpandedVendorRows({
  data,
  lists,
  setLists,
  bakeryItems,
  setBakeryItems,
  signedIn,
}) {
  const [ingList, setIngList] = useState([]);

  useEffect(() => {
    let ing = bakeryItems.filter((ba) => ba.actionType === data.vendorName);
    setIngList(ing);
  }, [bakeryItems]);

  const updateDBattr = async (id, attr, val) => {
    let addDetails = {
      id: id,
      isChecked: val,
    };

    console.log(addDetails);
    try {
      await API.graphql(
        graphqlOperation(updateBakeryItem, { input: { ...addDetails } })
      );
    } catch (error) {
      console.log("error on updating bakery items", error);
    }
  };

  const handleChecked = (checked, ing) => {
    console.log(checked);
    let id = ing.ingName + ing.location;
    console.log(id);
    //try {
    let listToModify = clonedeep(bakeryItems);
    let ind = listToModify.findIndex((inv) => inv["id"] === id);
    let val = checked;

    listToModify[ind].isChecked = val;
    updateDBattr(id, "isChecked", val);

    setBakeryItems(listToModify);
    //} catch {
    //  console.log("error updating attribute.");
    //}
  };

  return (
    <div>
      {ingList.map((ing) => (
        <ListGrid>
          <div>
            <Checkbox
              key={ing.id + "check"}
              onChange={(e) => handleChecked(e.checked, ing)}
              checked={ing.isChecked}
            ></Checkbox>
          </div>
          <div
            style={ing.isChecked ? { color: "lightgray" } : { color: "black" }}
          >
            <Ingredient key={ing.id + "ing"}>
              {ing.ingName} &nbsp;({Number(ing.par) - Number(ing.actual)})
            </Ingredient>
            <IngDetails>
              <div>
                Counted &nbsp;
                <TimeAgo
                  key={ing.id + "time"}
                  datetime={ing.updatedAt}
                  locale={us}
                />
                &nbsp;by {ing.whoUpdatedLast}
              </div>
              <br />
            </IngDetails>
          </div>
        </ListGrid>
      ))}
    </div>
  );
}

export default ExpandedVendorRows;
