const mongoose = require("mongoose");

const { Schema } = mongoose;

const defaultTaskSchema = new Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const DefaultTask = mongoose.model("DefaultTask", defaultTaskSchema);

module.exports = DefaultTask;
