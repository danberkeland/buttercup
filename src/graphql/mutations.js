/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBakeryItem = /* GraphQL */ `
  mutation CreateBakeryItem(
    $input: CreateBakeryItemInput!
    $condition: ModelBakeryItemConditionInput
  ) {
    createBakeryItem(input: $input, condition: $condition) {
      id
      par
      ingName
      trigger
      actionDescrip
      actionType
      updateList
      location
      whoUpdatedLast
      createdAt
      updatedAt
    }
  }
`;
export const updateBakeryItem = /* GraphQL */ `
  mutation UpdateBakeryItem(
    $input: UpdateBakeryItemInput!
    $condition: ModelBakeryItemConditionInput
  ) {
    updateBakeryItem(input: $input, condition: $condition) {
      id
      par
      ingName
      trigger
      actionDescrip
      actionType
      updateList
      location
      whoUpdatedLast
      createdAt
      updatedAt
    }
  }
`;
export const deleteBakeryItem = /* GraphQL */ `
  mutation DeleteBakeryItem(
    $input: DeleteBakeryItemInput!
    $condition: ModelBakeryItemConditionInput
  ) {
    deleteBakeryItem(input: $input, condition: $condition) {
      id
      par
      ingName
      trigger
      actionDescrip
      actionType
      updateList
      location
      whoUpdatedLast
      createdAt
      updatedAt
    }
  }
`;
export const createLogUpdate = /* GraphQL */ `
  mutation CreateLogUpdate(
    $input: CreateLogUpdateInput!
    $condition: ModellogUpdateConditionInput
  ) {
    createLogUpdate(input: $input, condition: $condition) {
      id
      adminName
      updateList
      createdAt
      updatedAt
    }
  }
`;
export const updateLogUpdate = /* GraphQL */ `
  mutation UpdateLogUpdate(
    $input: UpdateLogUpdateInput!
    $condition: ModellogUpdateConditionInput
  ) {
    updateLogUpdate(input: $input, condition: $condition) {
      id
      adminName
      updateList
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogUpdate = /* GraphQL */ `
  mutation DeleteLogUpdate(
    $input: DeleteLogUpdateInput!
    $condition: ModellogUpdateConditionInput
  ) {
    deleteLogUpdate(input: $input, condition: $condition) {
      id
      adminName
      updateList
      createdAt
      updatedAt
    }
  }
`;
export const createUpdateList = /* GraphQL */ `
  mutation CreateUpdateList(
    $input: CreateUpdateListInput!
    $condition: ModelupdateListConditionInput
  ) {
    createUpdateList(input: $input, condition: $condition) {
      id
      listName
      listAffect
      listNeedDay
      IsAM
      assignedTo
      createdAt
      updatedAt
    }
  }
`;
export const updateUpdateList = /* GraphQL */ `
  mutation UpdateUpdateList(
    $input: UpdateUpdateListInput!
    $condition: ModelupdateListConditionInput
  ) {
    updateUpdateList(input: $input, condition: $condition) {
      id
      listName
      listAffect
      listNeedDay
      IsAM
      assignedTo
      createdAt
      updatedAt
    }
  }
`;
export const deleteUpdateList = /* GraphQL */ `
  mutation DeleteUpdateList(
    $input: DeleteUpdateListInput!
    $condition: ModelupdateListConditionInput
  ) {
    deleteUpdateList(input: $input, condition: $condition) {
      id
      listName
      listAffect
      listNeedDay
      IsAM
      assignedTo
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModellocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      locationName
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModellocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      locationName
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModellocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      locationName
      createdAt
      updatedAt
    }
  }
`;
