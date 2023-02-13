import { gql } from '@apollo/client'

export const GET_EMPLOYEES = gql`
  {
    employees {
      id
      firstName
      lastName
      profilePic {
        url(transformation: { image: { resize: { width: 200, height: 200 } } })
      }
      bio
      email
      gender
      birthDate
    }
  }
`
export const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID) {
    employee(where: { id: $id }) {
      firstName
      lastName
      bio
      email
      gender
      birthDate
      profilePic {
        url(transformation: { image: { resize: { width: 200, height: 200 } } })
      }
    }
  }
`
