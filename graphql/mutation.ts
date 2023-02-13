import { gql } from '@apollo/client'

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $firstName: String!
    $lastName: String!
    $gender: String!
    $bio: String!
    $birthDate: Date!
    $email: String!
  ) {
    createEmployee(
      data: {
        firstName: $firstName
        lastName: $lastName
        gender: $gender
        bio: $bio
        birthDate: $birthDate
        email: $email
      }
    ) {
      id
      firstName
      lastName
      gender
      bio
      birthDate
      email
    }
  }
`
export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(where: { id: $id }) {
      id
    }
  }
`
