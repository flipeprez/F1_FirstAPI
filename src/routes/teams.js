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

//get all teamdata with .get()
router.get('/teams', (req, res)=>{
    //here we are going to find de f1 teams with .find()
    teamschema 
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

//get one teamdata with .get()
router.get('/teams/:id', (req, res)=>{
    //here we are going to find de f1 teams with .findById()
    const {id} = req.params;
    teamschema 
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({err}));
});

module.exports = router;