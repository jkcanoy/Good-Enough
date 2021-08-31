const { gql } = require("apollo-server-express");

const typeDefs = gql`

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  goals: [Goal]
}

type Goal {
  _id: ID
  description: String
  active: Boolean
  tally: Int
  date_created: String
  date_archived: String
  endDate: String
  metrics: [Metric]
}

type Metric {
  _id: ID
  complete: Boolean
  date: String
}

type Auth {
  token: ID
  user: User
}

type Query {
  user: User
  goals(_id: ID): [Goal]
  goal(goalId: ID!): Goal
  me: User
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
  login(
    email: String!
    password: String!
  ): Auth
  addGoal(description: String!, endDate: String): Goal
  addMetric(goalId: ID!, complete: Boolean!): Goal
}
`;

module.exports = typeDefs;