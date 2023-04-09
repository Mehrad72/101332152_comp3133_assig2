import { gql } from "apollo-angular";

export const login = gql`
query($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      password
    }
}
`;
export const signup = gql`
mutation Signup($username: String!, $email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password) {
    username
    email
    password
  }
}
`;

export const employees = gql`
query Employees {
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
export const addEmployee = gql`
mutation AddEmployee($firstName: String!, $lastName: String!, $email: String!, $gender: String!, $salary: Float!) {
    addEmployee(firstName: $firstName, lastName: $lastName, email: $email, gender: $gender, salary: $salary) {
      id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;


