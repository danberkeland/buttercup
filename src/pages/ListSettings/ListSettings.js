import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components";

import ListGrid from "./Parts/ListGrid";

import { listUpdateLists } from "../../graphql/queries";

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
  const [lists, setLists] = useState([]);

  const { setIsLoading } = useContext(ToggleContext);

  useEffect(() => {
    fetchLists();
    
  }, []);

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
        <h1>Add/Edit Lists</h1>
      </BasicContainer>

      <BasicContainer>
        <h2>Lists</h2>
        <ListGrid
          lists={lists}
          setLists={setLists}

        />
      </BasicContainer>
    </React.Fragment>
  );
}

export default Settings;
