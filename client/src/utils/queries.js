import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      defaultTasks {
        _id
        description
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
  }
`;
