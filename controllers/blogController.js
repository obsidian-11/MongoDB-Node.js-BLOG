const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const blog_index = (req, res) => {
  Blog.find({}, (err, docs) => {
    if (err) throw err;
    res.render("blogs.ejs", {
      title: "| Home",
      page_name: "blogs-home",
      blogs: docs,
    });
  }).sort({ timestamp: -1 });
};

const blog_create_get = (req, res) => {
  res.render("createBlog.ejs", {
    title: "| Create new blog",
    page_name: "blogs-create",
  });
};

const blog_create_post = (req, res) => {
  const { title, snippet, body } = req.body;
  const newBlog = new Blog({
    title,
    snippet,
    body,
    timestamp: new Date(),
  });
  newBlog.save((err, doc) => {
    if (err) throw err;
    res.redirect("/blogs");
  });
};

const blog_delete = (req, res) => {
  const blogId = req.params.id;
  Blog.deleteOne({ _id: blogId }, (err) => {
    if (err) throw err;
  });
  res.json({
    location: "/blogs",
  });
};

const blog_details = (req, res) => {
  const blogId = req.params.id;
  Blog.findOne({ _id: blogId }, (err, doc) => {
    if (err) throw err;
    res.render("blogDetails.ejs", {
      title: `| ${doc.title}`,
      page_name: "Blog Post",
      blogTitle: doc.title,
      blogBody: doc.body,
    });
  });
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_details,
};
