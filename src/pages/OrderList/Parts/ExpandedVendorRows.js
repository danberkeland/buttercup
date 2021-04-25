import React from "react";
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import us from 'timeago.js/lib/lang/en_US';

import styled from "styled-components";

const Ingredient = styled.div`
  font-weight:bold;
`;

const IngDetails = styled.div`
  font-size:.9em;
`;

function ExpandedVendorRows({
  data,
  lists,
  setLists,
  bakeryItems,
  setBakeryItems,
  signedIn,
}) {
 
    console.log(data)
  
  let ingList = bakeryItems.filter(ba => ba.actionType === data.vendorName)

 
  console.log(ingList)

  return (
    <div>
      {ingList.map((ing) => (
        <React.Fragment>
          <Ingredient>
            {ing.ingName} &nbsp;({Number(ing.par) - Number(ing.actual)})
          </Ingredient>
          <IngDetails>
          <div>Counted &nbsp;
          <TimeAgo datetime={ing.updatedAt} locale={us} />
          &nbsp;by {ing.whoUpdatedLast}</div>
          <br />

          </IngDetails>
         
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExpandedVendorRows;
