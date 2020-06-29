const express = require("express");
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get("/", blogController.blog_index);

router.get("/create", blogController.blog_create_get);

module.exports = router;







// EJS

// ----- FOR LOOP - DISPLAY BLOGS 
// <% for (let index = 0; index < blogs.length; index++) { %>
//   <div class="blog">
//     <div class="blog-title">
//       <%= blogs[index].title %>
//     </div>
//     <div class="blog-snippet">
//       <%= blogs[index].snippet %>
//     </div>
//     <a href="/blogs/<%= blogs[index].id %> " class="read-more-link">Read more</a>
//   </div>
//   <% } %>