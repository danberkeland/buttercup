import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components";

import LocationGrid from "./Parts/LocationGrid";
import AddLocation from "./Parts/AddLocation.js";

import { listBakeryItems, listLocations, listUpdateLists } from "../../graphql/queries";

import { API, graphqlOperation } from "aws-amplify";
import { ToggleContext } from "../../dataContexts/ToggleContext";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  border: 1px solid lightgray;
  padding: 5px 10px;
  margin: 4px auto;
  box-sizing: border-box;
`;

const fetchInfo = async (operation, opString, limit) => {
  try {
    let info = await API.graphql(
      graphqlOperation(operation, {
        limit: limit,
      })
    );
    let list = info.data[opString].items;

    let noDelete = list.filter((li) => li["_deleted"] !== true);
    return noDelete;
  } catch {
    return [];
  }
};

function Settings() {
  const [locations, setLocations] = useState([]);
  const [bakeryItems, setBakeryItems] = useState([]);
  const [ lists, setLists ] = useState([])

  const { setIsLoading } = useContext(ToggleContext);

  useEffect(() => {
    fetchBakeryItems();
    fetchLocations();
    fetchLists();
  }, []);

  const fetchBakeryItems = async () => {
    setIsLoading(true);
    try {
      let items = await fetchInfo(listBakeryItems, "listBakeryItems", "1000");
      setBakeryItems(items);
    } catch (error) {
      console.log("error on fetching Bakery Items List", error);
      setIsLoading(false);
    }
  };

  const fetchLocations = async () => {
    try {
      let locs = await fetchInfo(listLocations, "listLocations", "50");
      setLocations(locs);
      
    } catch (error) {
      console.log("error on fetching Location List", error);
      setIsLoading(false);
    }
  };

  const fetchLists = async () => {
    setIsLoading(true);
    try {
      let items = await fetchInfo(listUpdateLists, "listUpdateLists", "1000");
      setLists(items);
      setIsLoading(false);
    } catch (error) {
      console.log("error on fetching updateLists", error);
      setIsLoading(false);
    }
  };

  
  return (
    <React.Fragment>

      <BasicContainer>
        <h1>Add/Edit Ingredients</h1>
      </BasicContainer>

      <BasicContainer>
        <AddLocation locations={locations} setLocations={setLocations} />
      </BasicContainer>

      <BasicContainer>
        <h2>Ingredients</h2>
        <LocationGrid
          locations={locations}
          setLocations={setLocations}
          bakeryItems={bakeryItems}
          setBakeryItems={setBakeryItems}
          lists={lists}
          setLists={setLists}
        />
      </BasicContainer>
    </React.Fragment>
  );
}

export default Settings;
