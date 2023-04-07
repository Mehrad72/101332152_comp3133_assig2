import { gql } from "apollo-angular";

export const login = gql`
    query {
        login {
            username
            email
            password
        }
    }
`;
export const signup = gql`
    query {
        signup {
            username
            email
            password
        } 
    }
`;

export const employees = gql`
    query {
        employees {
            id
            firstName
            lastName
            email
            gender
            salary
          }
    }
`;

export const getEmployee = gql`
query ($getEmployeeId: ID!) {
    getEmployee(id: $getEmployeeId) {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;


