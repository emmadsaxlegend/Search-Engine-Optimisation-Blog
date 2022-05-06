const express = require('express');
const router = express.Router();
const {signup, signin, signout, requireSignin} = require('../controllers/authContoller')
// validators
const {validationResult} = require('../validators/index_Validator')
const {check_signUp, check_signIn} = require('../validators/auth_check')


// Routes
router.post('/signup', check_signUp, validationResult, signup);
router.post('/signin', check_signIn, validationResult, signin);
router.get('/signout', signout);

// test
router.get('/secret', requireSignin, (req, res) =>{
    res.json({
        message: "you have access to secret page"
    });
});

module.exports = router;