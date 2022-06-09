const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const {expressjwt} = require('express-jwt');
require('dotenv').config()

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            })
        }

        User.findOne({account: req.body.account}).exec((err, user) =>{
            if (user) {
                return res.status(400).json({
                    error: 'Account Number is taken'
                })
            }

        const { name, email, password, account } = req.body
        let username = shortId.generate()
        let profile = `${process.env.CLIENT_URL}/profile/${username}`

        let newUser = new User({ name, email, password, account, profile, username })
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.json({
                user: success
            })
        })
        })
        

    })
}

exports.signin = (req, res) => {
    const { account, password} = req.body
    // check if user exist
    User.findOne({ account }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Account Number is invalid. Please signup"
            });
        }
        // authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Invalid Account Number and password. Please try again"
            })
        }
        // generate a json web token and send to client
        const token = jwt.sign(
            { _id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' })

        res.cookie('token', token, { expiresIn: '1d' })
        const {_id, username, name, email, account, role} = user
        return res.json({
            token,
            user: {_id, username, name, email, account, role} 
        })
    })


};

exports.signout = (req, res) => {
    res.clearCookie("token")
    res.json({
        message: 'Signout success'
    });
}

exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET, algorithms: [process.env.ALGORITHMS]
});
