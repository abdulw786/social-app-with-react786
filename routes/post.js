
const express = require("express");
const postController = require('../controllars/post');

const router = express.Router();


router.get('/', postController.getPosts);


module.exports = router;

