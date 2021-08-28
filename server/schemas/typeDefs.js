const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar ISODate

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
    date_created: ISODate
    date_archived: ISODate
    metrics: [Metric]
  }

  type Metric {
    _id: ID
    complete: Boolean
    date: ISODate
  }

  type Query {
    user(_id: ID!): User
    users: [User]
    goal(_id: ID!): Goal
    goals: [Goal]
    metric(_id: ID!): Metric
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

    addGoal(
      description: String
      active: Boolean
      tally: Int
      date_created: String
      date_archived: String
    ): Goal!

    updateGoal(
      id: ID!
      description: String
      active: Boolean
      tally: Int
      date_created: String
      date_archived: String
    ): Goal!

    deleteGoal(id: ID!): Goal

    addMetric(complete: Boolean, date: String): Metric!

    updateMetric(id: ID!, complete: Boolean, date: String): Metric!

    deleteMetric(id: ID!): Metric
  }
`;

module.exports = typeDefs;
