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
  mutation addGoal($active: Boolean!, $tally: Number!, $date_created: Date! $date_archived: Date!) {
    addGoal( active: true, tally: 0) {
      _id
      active
      tally
      date_created
      metrics ( complete: false, submission_date: ) {
        _id
        complete
        submission_date
      }
    }
    ) 
  }
`;

// export const EDIT_GOAL = gql``;
// export const ADD_METRIC = gql``;
// export const EDIT_METRIC = gql``;
