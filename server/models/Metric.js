const mongoose = require("mongoose");

const { Schema } = mongoose;

const metricSchema = new Schema({
  complete: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
  },
});

const Metric = mongoose.model("Metric", metricSchema);

module.exports = Metric;
