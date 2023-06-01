const express = require('express');
const  User  = require('../models/user');
const bcrypt=require('bcrypt');
const router = express.Router();

router.get(`/`, async  (req, res) => {
    
res.render('pages/signup');

});

router.post(`/`, async  (req, res) => {
    console.log(req.body);
    

    const user={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
    }


    const users=new User(user);
    users.save().then(result=>{
        res.render('pages/home',{ user: (req.session.user === undefined ? "" : req.session.user) });
    }).catch(err=>{
        console.log(err);
    })
    
  
});

module.exports = router;