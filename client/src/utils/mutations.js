import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal($description: String!, $active: Boolean!, $tally: Number!, $date_created: Date! $date_archived: Date) {
    addGoal {
      _id
      description
      active
      tally
      date_created
    }
  }
`;

export const UPDATE_GOAL = gql`
  mutation updateGoal($description: String!, $active: Boolean!, $tally: Number!, $date_created: Date! $date_archived: Date) {
    updateGoal {
      _id
      active
      description
      tally
      date_created
      date_archived
    }
  }
`;

export const ADD_METRIC = gql`
  mutation addMetric($complete: Boolean!, $date: Date!) {
    addMetric {
      _id
      complete
      date
    }
  }
`;

export const UPDATE_METRIC = gql`
mutation updateMetric($complete: Boolean!, $date: Date!) {
  addMetric {
    _id
    complete
    date
  }
}
`;