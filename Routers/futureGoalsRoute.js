const express  = require("express")
const router = express.Router();
const goal = require("../Models/futureGoals.js");


router.get("/goals", async(req,res) => {
    try{
        await goal.find({})
        .then(goals => {
        res.status(200).json({
            message : 'success',
            data : goals
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