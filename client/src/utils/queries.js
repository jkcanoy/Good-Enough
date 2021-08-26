import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      goals {
        _id
        active
        dateCreated
        dateArchived
        metrics {
          _id
          date
          completed
        }
      }
    }
  }
`;
