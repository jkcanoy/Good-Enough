import { gql } from "@apollo/client";
//CBW: 08.28.21 Queries work if date fields are commented out. Pulling single users, we run into authentication issues from GraphQL Playground that we hope are avoided by passing in authentication in header in production.

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
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
        date_archived
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

export const QUERY_GOALS = gql`
  query getGoals {
    goals {
      _id
      description
      active
      tally
      date_created
      date_archived
      endDate
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleGoal($goalId: ID!) {
    goal(goalId: $goalId) {
      _id
      description
      active
      tally
      date_created
      date_archived
      endDate
      metrics {
        _id
        complete
        date
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
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
        date_archived
        endDate
        metrics{
          _id
          complete
          date
        }
      }
    }
  }
`;