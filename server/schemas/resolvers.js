const { AuthenticationError } = require("apollo-server-express");
const { User, Goal } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, {email}) => {
        return User.findOne({email}).populate('goals');
    },
    goals: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Goal.find(params).sort({ date_created: -1 });
    },
    goal: async (parent, { goalId }) => {
      return Goal.findOne({ _id: goalId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('goals');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
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
    addGoal: async (parent, { description, endDate }, context ) => {

      if (context.user) {

          const goal = await Goal.create ({
            description,
            endDate
          });


          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { goals: goal._id }},
            );

        return goal;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addMetric: async (parent, { goalId, complete }, context ) => {
      if (context.user) {
        return Goal.findOneAndUpdate(
          { _id: goalId },
          {
            $addToSet: {
              metrics: { complete },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
    }
    throw new AuthenticationError('You need to be logged in!');
  },

    
  },
};

module.exports = resolvers;
