const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    relation: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
    },
},
    {
    timestamps: true, // adds createdAt & updatedAt automatically
    }
)

const CommentsModel = mongoose.model("comments",CommentsSchema)
module.exports = CommentsModel