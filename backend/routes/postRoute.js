const express = require('express');
const router = express.Router();
const {post, update} = require('../controllers/postController')


router.post("/post", post)
router.put("/post/:id", update)

module.exports = router;
