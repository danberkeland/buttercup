import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import swal from "@sweetalert/with-react";
import Locations from "./Parts/Locations";

import { Button } from "primereact/button";

import { listUpdateLists, listBakeryItems } from "../../graphql/queries";

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

function EODCount() {
  const [ lists, setLists ] = useState([]);
  const [ bakeryItems, setBakeryItems ] = useState([]);
  const [ signedIn, setSignedIn ] = useState("null")

  const { setIsLoading } = useContext(ToggleContext);

  useEffect(() => {
    fetchLists();
    fetchBakeryItems()
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

  const fetchBakeryItems = async () => {
    setIsLoading(true);
    try {
      let items = await fetchInfo(listBakeryItems, "listBakeryItems", "1000");
      setBakeryItems(items);
      setIsLoading(false);
    } catch (error) {
      console.log("error on fetching bakeryItems", error);
      setIsLoading(false);
    }
  };

  const handleSignIn = () => {
    let signIn;

    swal("Please Sign In:", {
      content: "input",
    }).then(async (value) => {
      signIn = value;
      setSignedIn(signIn)
    
    });
    
  };


  

  return (
    <React.Fragment>

      <BasicContainer>
        <h1>EOD Counts</h1>
      </BasicContainer>

      {signedIn === "null" ?
      <BasicContainer>
      <Button
        label="Please Sign in to make EOD Changes"
        icon="pi pi-plus"
        onClick={handleSignIn}
        className={"p-button-raised p-button-rounded"}
      /></BasicContainer> : <div></div>
      }


      {signedIn !=="null" ?
      <BasicContainer>
        <h2>Locations</h2>
        <Locations
          lists={lists}
          setLists={setLists}
          bakeryItems={bakeryItems}
          setBakeryItems={setBakeryItems}
          signedIn={signedIn}

        />
      </BasicContainer> : <div></div>
      }
    </React.Fragment>
  );
}

export default EODCount;
