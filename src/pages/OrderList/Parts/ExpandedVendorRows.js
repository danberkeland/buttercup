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
          <h4>{ing.ingName}:{Number(ing.par) - Number(ing.actual)}</h4>
          
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExpandedVendorRows;
