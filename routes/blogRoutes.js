const express = require("express");
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get("/", blogController.blog_index);

router.get("/create", blogController.blog_create_get);

router.post('/create', blogController.blog_create_post);

module.exports = router;
