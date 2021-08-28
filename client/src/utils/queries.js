import { gql } from "@apollo/client";
//CBW: 08.28.21 Queries work if date fields are commented out. Pulling single users, we run into authentication issues from GraphQL Playground that we hope are avoided by passing in authentication in header in production.

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($_id: ID! ) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      goals {
        _id
        description
        active
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
  }
`;

export const QUERY_USERS = gql`
query getUsers {
    users {
      _id
      firstName
      lastName
      goals {
        _id
        description
        active
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
  }
`;

export const QUERY_SINGLE_GOAL = gql`
  query getSingleGoal($_id: ID!) {
    goal(_id: $_id) {
      _id
      active
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

export const QUERY_GOALS = gql`
  query getGoals {
    goals {
      _id
      active
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

export const QUERY_SINGLE_METRIC = gql`
  query getSingleMetric($_id: ID!) {
    metric(_id: $_id) {
      _id
      complete
      date
    }
  }
`;

export const QUERY_METRICS = gql`
  query getMetrics {
      metrics {
        _id
        complete
        date
      }
    }
`;