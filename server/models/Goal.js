const mongoose = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const { Schema, model } = mongoose;

const goalSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
  tally: {
    type: Number,
    required: false,
    default: 0,
  },
  date_created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  endDate: {
    type: Date,
    required: false,
    get: (timestamp) => dateFormat(timestamp),
  },
  metrics: [
    {
      complete: {
        type: Boolean,
      },
      date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
      },
    }
  ],
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;