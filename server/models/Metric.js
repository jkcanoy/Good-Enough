const mongoose = require("mongoose");

const { Schema } = mongoose;

const metricSchema = new Schema({
  complete: {
    type: Boolean,
    required: true,
  },
  submission_date: {
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  goal: {
    type: Schema.Types.ObjectId,
    ref: "Goal",
  },
});

const Metric = mongoose.model("Metric", metricSchema);

module.exports = Metric;
