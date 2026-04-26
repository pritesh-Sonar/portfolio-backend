const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate titles
  },
  desc: {
    type: String,
    required: true,
  }
});

// Export the model
module.exports = mongoose.model("Goal", GoalSchema);
