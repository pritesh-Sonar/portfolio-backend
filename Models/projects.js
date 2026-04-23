const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    id: String,
    title: String,
    tag: String,
    year: String,
    description: String,
    tech: [String],
    image: String,
    github: String,
    color: String,
})

const ProjectsModel = mongoose.model("projects",ProjectSchema)
module.exports = ProjectsModel