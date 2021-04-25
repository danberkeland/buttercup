import React from "react";


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
          <h2>{ing.ingName}:{Number(ing.par) - Number(ing.actual)}</h2>
          <h5>Last Updated: {ing.updatedAt} by {ing.whoUpdatedLast}</h5>
          
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExpandedVendorRows;
