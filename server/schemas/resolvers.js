const { AuthenticationError } = require("apollo-server-express");
const { User, Goal, Metric } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLDateTime } = require("graphql-iso-date");

const resolvers = {
  Query: {
    goals: async () => {
      return Goal.find().sort();
    },

    goal: async (parent, { _id }) => {
      return Goal.findOne({ _id });
    },

    metrics: async () => {
      return Metric.find().sort();
    },

    metric: async (parent, { _id }) => {
      return Metric.findOne({ _id });
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "goals.metrics",
          // populate: "category",
        });

        user.goals.sort((a, b) => b.date_created - a.date_created);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    users: async (parent, args, context) => {
      if (context.user) {
        const user = await User.find().populate({
          path: "goals.metrics",
          // populate: "category",
        });

        // user.goals.sort((a, b) => b.date_created - a.date_created);

        return user;
      }
    },
  },
  Mutation: {
    addGoal: async (parent, args) => {},

    updateGoal: async (parent, args) => {},

    deleteGoal: async (parent, args) => {},

    addMetric: async (parent, args) => {},

    updateMetric: async (parent, args) => {},

    deleteMetric: async (parent, args) => {},

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },

  ISODate: GraphQLDateTime,
};

module.exports = resolvers;
