import React from "react";

import { Slider } from "primereact/slider";

import { updateBakeryItem } from "../../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";

const clonedeep = require("lodash.clonedeep");

const { DateTime } = require("luxon");

function ExpandedLocationRows({
  data,
  lists,
  setLists,
  bakeryItems,
  setBakeryItems,
  signedIn,
}) {
 
    console.log(data)
  const updateDBattr = async (id, signedIn, val) => {
    
    let addDetails = {
      id: id,
      actual: val,
      whoUpdatedLast: signedIn,
    };
    try {
      await API.graphql(
        graphqlOperation(updateBakeryItem, { input: { ...addDetails } })
      );
      
    } catch (error) {
      console.log("error on updating bakery items", error);
      
    }
  };

  const handleValueChange = (e, ing, attr) => {
      console.log(ing + data.locationName)
    try {
      let listToModify = clonedeep(bakeryItems);
      let id = ing + data.locationName;

      let ind = listToModify.findIndex(
        (inv) =>
          inv["ingName"] === ing && inv["location"] === data.locationName
      );
      let val = Number(e.value);
      
      listToModify[ind][attr] = val;
      updateDBattr(id, signedIn, val);

      

      setBakeryItems(listToModify);
    } catch {
      console.log("error updating lists.");
    }
  };

  let ingList = bakeryItems.filter((ba) =>
    lists
      .filter((li) =>
        li.listNeedDay.includes(
          DateTime.now().setZone("America/Los_Angeles").weekdayShort
        )
      )
      .map((it) => it.listAffect)
      .includes(ba.actionType)
  );
  console.log(ingList)

  return (
    <div>
      {ingList.map((ing) => (
        <React.Fragment>
          <h5>{ing.ingName}:{ing.actual}</h5>
          <Slider
          key={ing.id}
            value={ing.actual}
            max={ing.par}
            onChange={(e) => handleValueChange(e, ing.ingName, "actual")}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExpandedLocationRows;
