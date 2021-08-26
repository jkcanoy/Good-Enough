const mongoose = require("mongoose");

const { Schema } = mongoose;

const goalSchema = new Schema({
  active: {
    type: Boolean,
    required: true,
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
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  task: {
    type: Schema.Types.ObjectId,
    ref: "DefaultTask",
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
