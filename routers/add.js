const express = require('express');
const  User  = require('../models/user');
const bcrypt=require('bcrypt');
const router = express.Router();

router.get(`/`, async  (req, res) => {
    
res.render('pages/signup');

});


module.exports = router;