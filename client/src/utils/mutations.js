import { gql } from "@apollo/client";
//CBW: As a rule, leaving _id and date_created off mutations as they are provided by MongoDB.

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
  mutation addGoal(
    $active: Boolean!
    $description: String!
    $tally: Int!
    $date_created: String!
    $date_archived: String
  ) {
    addGoal(
      active: $active
      description: $description
      tally: $tally
    ) {
      _id
      active
      description
      tally
      date_created
      date_archived
      metrics {
        _id
        complete
        date
      }
    }
  }
`;

export const UPDATE_GOAL = gql`
  mutation updateGoal(
    $active: Boolean!
    $description: String!
    $tally: Int!
    $date_created: String!
    $date_archived: String
  ) {
    updateGoal(
      active: $active
      tally: $tally
      date_archived: $date_archived
    ) {
      _id
      active
      description
      tally
      date_created
      date_archived
      metrics {
        _id
        complete
        date
      }
    }
  }
`;

export const ADD_METRIC = gql`
  mutation addMetric(
    $complete: Boolean!
    $date: String!
  ) {
    addMetric(
      complete: $complete
      date: $date
    ) {
      _id
      complete
      date
    }
  }
`;

export const UPDATE_METRIC = gql`
  mutation updateMetric(
    $complete: Boolean!
    $date: String!
  ) {
    updateMetric(
      complete: $complete
      date: $date
    ) {
      _id
      complete
      date
    }
  }
`;