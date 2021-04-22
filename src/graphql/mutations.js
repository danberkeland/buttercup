/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBakeryItems = /* GraphQL */ `
  mutation CreateBakeryItems(
    $input: CreateBakeryItemsInput!
    $condition: ModelBakeryItemsConditionInput
  ) {
    createBakeryItems(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateBakeryItems = /* GraphQL */ `
  mutation UpdateBakeryItems(
    $input: UpdateBakeryItemsInput!
    $condition: ModelBakeryItemsConditionInput
  ) {
    updateBakeryItems(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteBakeryItems = /* GraphQL */ `
  mutation DeleteBakeryItems(
    $input: DeleteBakeryItemsInput!
    $condition: ModelBakeryItemsConditionInput
  ) {
    deleteBakeryItems(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
