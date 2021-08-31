import { gql } from "@apollo/client";
//CBW: 08.28.21 Queries work if date fields are commented out. Pulling single users, we run into authentication issues from GraphQL Playground that we hope are avoided by passing in authentication in header in production.

<<<<<<< HEAD
export const QUERY_SINGLE_USER = gql`
  query getSingleUser($_id: ID! ) {
    user(_id: $_id) {
=======
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
>>>>>>> ceaad3061db0b36ef46be752e08dbf31ce00d095
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

<<<<<<< HEAD
export const QUERY_GOALS = gql`
  query getGoals {
    goals {
=======
export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleGoal($goalId: ID!) {
    goal(goalId: $goalId) {
>>>>>>> ceaad3061db0b36ef46be752e08dbf31ce00d095
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
<<<<<<< HEAD
      complete
      date
    }
  }
`;

export const QUERY_METRICS = gql`
  query getMetrics {
      metrics {
=======
      firstName
      lastName
      email
      goals {
>>>>>>> ceaad3061db0b36ef46be752e08dbf31ce00d095
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