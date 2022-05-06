const express = require('express');
const router = express.Router();
const {time} = require('../controllers/blogController')

// Routes
router.get('/', time)
module.exports = router 