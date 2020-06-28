const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("blogs.ejs", {
    title: '| Home',
    page_name: 'blogs-home'
  });
});

router.get("/create", (req, res) => {
  res.render("createBlog.ejs", {
    title: '| Create new blog',
    page_name: 'blogs-create'
  });
});

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