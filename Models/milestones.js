const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  era: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  tech: {
    type: [String], // Array of strings
    default: [],
  },
  color: {
    type: String,
    default: "#000000",
  },
  side: {
    type: String,
    enum: ["left", "right"], // restrict to left or right
    required: true,
  },
  highlight: {
    type: String,
    default: "",
  },
});

// Export the model
module.exports = mongoose.model("Timeline", MilestoneSchema);
