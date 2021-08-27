import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($_id: ID!) {
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
          submission_date
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
query getUsers {
    user {
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
          submission_date
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
        submission_date
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
        submission_date
      }
    }
  }
`;

export const QUERY_SINGLE_METRIC = gql`
  query getSingleMetric($_id: ID!) {
    metric(_id: $_id) {
      _id
      complete
      submission_date
    }
  }
`;

export const QUERY_METRICS = gql`
  query getMetrics {
      metrics {
        _id
        complete
        submission_date
      }
    }
`;