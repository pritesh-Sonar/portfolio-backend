const express  = require("express")
const router = express.Router();
const Comment = require("../Models/comments");


router.post("/comment", async (req, res) => {
  try {
    const { name, relation, message } = req.body;

    // Basic validation
    if (!name || !message) {
      return res.status(400).json({
        message: "Name and message are required",
      });
    }

    const newComment = new Comment({
      name,
      relation,
      message,
    });

    const savedComment = await newComment.save();

    res.status(201).json({
      message: "Comment created successfully",
      data: savedComment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while commenting",
      error: error.message,
    });
  }
});


router.get("/comment", async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const total = await Comment.countDocuments();

    const comments = await Comment.find()
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching comments",
      error: error.message,
    });
  }
});

module.exports = router;