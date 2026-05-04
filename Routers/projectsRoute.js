const express  = require("express")
const router = express.Router();
const Project = require("../Models/projects");


router.get("/projects", async(req,res) => {
    try{
        await Project
        .find({})
        .sort({id : 1})
        .then(projects => {
        res.status(200).json({
            message : 'success',
            data : projects
        });
        
    })
    }
    catch(error){
       res.status(500).json({
            message: "while fetching projects",
            error: error.message
        });
    }
    
})

module.exports = router;