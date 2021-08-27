const mongoose = require("mongoose");

const { Schema } = mongoose;

const goalSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  tally: {
    type: Number,
    required: true,
    default: 0,
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  date_archived: {
    type: Date,
    required: false,
    default: null,
    get: (timestamp) => dateFormat(timestamp),
  },
  metrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Metric",
    },
  ],
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // task: {
  //   type: Schema.Types.ObjectId,
  //   ref: "DefaultTask",
  // },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;