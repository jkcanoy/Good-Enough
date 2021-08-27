const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    goals: [Goal]
  }

  type Auth {
    token: ID
    user: User
  }

  type Goal {
    _id: ID
    description: String
    active: Boolean
    tally: Int
    date_created: String
    date_archived: String
    metrics: [Metric]
  }

  type Metric {
    _id: ID
    complete: Boolean
    date: String
  }

  type Query {
    user: User
    goal(id: ID!): [Goal]
    goals: [Goal]
    metric(id: ID!): [Metric]
    metrics: [Metric]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    createGoal(description: String, active: Boolean, tally: Int, date_created: String, date_archived: String ) : Goal
    updateGoal(id: ID!, description: String, active: Boolean, tally: Int, date_created: String, date_archived: String ) : Goal
    deleteGoal(id: ID!) : Goal
    createMetric(complete: Boolean, date: String) : Metric
    updateMetric(id: ID!, complete: Boolean, date: String) : Metric
    deleteMetric(id: ID!) : Metric
  }
`;

module.exports = typeDefs;
