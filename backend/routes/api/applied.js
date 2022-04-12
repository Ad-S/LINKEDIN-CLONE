const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// const validateRegisterInput = require("../../validation/recruiters_val");

const User = require("../../models/apply");

router.post("/addit", (req,res) => {
    // User.findOne({email: req.body.email}).then(user =>{}

    const newUser = new User({
        rec_email: req.body.rec_email,
        name: req.body.name,
        email: req.body.email,
        job_id: req.body.job_id,
        Skills: req.body.Skills,
        Institute_name: req.body.Institute_name,
        Stage_of_app: req.body.Stage_of_app,
        sop: req.body.sop
    });
    newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

router.post("/showapc", (req,res) => {
    console.log(req.body);
    User.find({job_id: req.body.job_id}).then(user =>{
        res.json(user);
    })
})

router.post("/showemp", (req,res) => {
    // console.log(req.body);
    User.find({rec_email: req.body.email}).then(user =>{
        res.json(user);
    })
})

module.exports = router;
