const express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var User = require('../model/user');

<<<<<<< HEAD
=======
//sign up 
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const newUser = new User({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            typeofUser: req.body.typeofUser,
            phonenumber: req.body.phonenumber
        });
        newUser.save((err, user) => {
            if (err) {
                res.json({
                    msg: err
                });
            } else {
                res.json({
                    msg: user.typeofUser,
                    id: user._id
                })
            }
        })
    });
});

module.exports = router;