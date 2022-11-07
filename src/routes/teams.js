const express = require('express');
const teamschema =require('../models/team');
const router = express.Router();

//create a team
router.post('/teams', (req, res)=>{
    //here we are going to create de f1 teams
    const team = teamschema(req.body);
    team 
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

module.exports = router;