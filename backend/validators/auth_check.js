const { check } = require('express-validator');

exports.check_signUp = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    check('account')
        .isLength({ min: 11 })
        .withMessage('Account Number must be at least 11 characters long')
];

exports.check_signIn = [
     check('account')
        .isLength({ min: 11 })
        .withMessage('Account Number must be at least 11 characters long'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
   
];