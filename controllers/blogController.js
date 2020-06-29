const mongoose = require('mongoose');
const Blog = require('../models/Blog');

const blog_index = (req, res) => {
    res.render("blogs.ejs", {
        title: '| Home',
        page_name: 'blogs-home'
    });
}

const blog_create_get = (req, res) => {
    res.render("createBlog.ejs", {
        title: '| Create new blog',
        page_name: 'blogs-create'
    });
}

const blog_create_post = (req, res) => {
    const { title, snippet, body } = req.body;
    const newBlog = new Blog({
        title,
        snippet,
        body
    });
    newBlog.save((err, doc) => {
        if (err) throw err;
        console.log(doc);
        res.redirect('/blogs')
    });
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post
}