/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBakeryItem = /* GraphQL */ `
  query GetBakeryItem($id: ID!) {
    getBakeryItem(id: $id) {
      id
      par
      ingName
      trigger
      actionDescrip
      actionType
      updateList
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
        ingName
        trigger
        actionDescrip
        actionType
        updateList
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
      listType
      needList
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
        listType
        needList
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
