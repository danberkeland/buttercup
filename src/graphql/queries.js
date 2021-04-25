/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBakeryItem = /* GraphQL */ `
  query GetBakeryItem($id: ID!) {
    getBakeryItem(id: $id) {
      id
      par
      actual
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
export const listBakeryItems = /* GraphQL */ `
  query ListBakeryItems(
    $filter: ModelBakeryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBakeryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        par
        actual
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
      nextToken
    }
  }
`;
export const getLogUpdate = /* GraphQL */ `
  query GetLogUpdate($id: ID!) {
    getLogUpdate(id: $id) {
      id
      adminName
      updateList
      createdAt
      updatedAt
    }
  }
`;
export const listLogUpdates = /* GraphQL */ `
  query ListLogUpdates(
    $filter: ModellogUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adminName
        updateList
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUpdateList = /* GraphQL */ `
  query GetUpdateList($id: ID!) {
    getUpdateList(id: $id) {
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
export const listUpdateLists = /* GraphQL */ `
  query ListUpdateLists(
    $filter: ModelupdateListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdateLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        listName
        listAffect
        listNeedDay
        IsAM
        assignedTo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      locationName
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModellocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
