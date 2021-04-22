/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBakeryItems = /* GraphQL */ `
  query GetBakeryItems($id: ID!) {
    getBakeryItems(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listBakeryItemss = /* GraphQL */ `
  query ListBakeryItemss(
    $filter: ModelBakeryItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBakeryItemss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
