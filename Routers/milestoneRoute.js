const express  = require("express")
const router = express.Router();
const milestone = require("../Models/milestones");


router.get("/milestones", async(req,res) => {
    try{
        await milestone
        .find({})
        .sort({id : 1})
        .then(milestones => {
        res.status(200).json({
            message : 'success',
            data : milestones
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