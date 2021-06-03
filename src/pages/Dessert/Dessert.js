import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import swal from "@sweetalert/with-react";
import Vendors from "./Parts/Vendors";

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

function DessertList() {
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
        <h1>Dessert Baker List</h1>
      </BasicContainer>

      <BasicContainer>
        
        <Vendors lists={lists} setLists={setLists} bakeryItems={bakeryItems} setBakeryItems={setBakeryItems}
          
        />
      </BasicContainer>
    </React.Fragment>
  );
}

export default DessertList;
