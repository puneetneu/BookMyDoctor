const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router();


const User = require('../model/user');

<<<<<<< HEAD
=======
//login authentication
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
router.post('/', (req, res, next) => {
    let fetchedUser;
    User.findOne({
        email: req.body.email_id
    }).then(user => {
        if (!user) {
<<<<<<< HEAD
            return res.status(401).json({
                msg: 'No Doctor Found'
=======
            return res.json({
                msg: 'No User Found'
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
            });
        }
        fetchedUser = user;  
        return bcrypt.compare(req.body.password, user.password);     
    }).then(result => {
        if (!result) {
<<<<<<< HEAD
            return res.status(401).json({
                msg: err
=======
            return res.json({
                msg: 'Invalid User'
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
            });
        }
        const token = jwt.sign({
            email: fetchedUser.email,
            userID: fetchedUser._id,
        }, 'secret_this_should_be_long', {
            expiresIn: '1h'
        });
        res.status(200).json({
            token: token,
            userID:fetchedUser._id,
<<<<<<< HEAD
            type: fetchedUser.typeofUser
        });
    }).catch(err => {
        return res.status(401).json({
            msg: 'Authentication Failed'
=======
            type: fetchedUser.typeofUser,
            msg:''
        });
    }).catch(err => {
        return res.status(401).json({
            msg: 'Invalid User'
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
        })
    });
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
