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
  mutation addGoal( $description: String!, $endDate: String) {
    addGoal( description: $description, endDate: $endDate) 
      {
        _id
        description
        active
        tally
        date_created
        endDate
        metrics {
          _id
          complete
          date
        }
      }
    }
`;

export const ADD_METRIC = gql`
  mutation addMetric( $goalId: ID!, $complete: Boolean!, $newTally: Int) {
    addMetric(goalId: $goalId, complete: $complete, newTally: $newTally)
    {
      _id
      description
      active
      tally
      date_created
      endDate
      metrics {
        _id
        complete
        date
      }
    }
  }
`;

export const UPDATE_METRIC = gql`
mutation updateMetric( $updatedMetric: metricInput!) {
  updateMetric(updatedMetric: $updatedMetric) 
  {
    _id
    firstName
    lastName
    email
    goals {
      _id
      description
      active
      tally
      date_created
      endDate
      metrics {
        _id
        complete
        date
      }
    }
  }
}
`;

export const UPDATE_GOAL = gql`
mutation updateGoal( $endDate: String!, $goalId: ID!, $goalActive: Boolean) {
  updateGoal(endDate: $endDate, goalId: $goalId, goalActive: $goalActive) 
  {
    _id
    description
    active
    tally
    date_created
    endDate
  }
}
`;