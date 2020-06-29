const mongoose = require('mongoose');
const Blog = require('../models/Blog');

const blog_index = (req, res) => {
    Blog.find({}, (err, docs) => {
        if (err) throw err;
        res.render("blogs.ejs", {
            title: '| Home',
            page_name: 'blogs-home',
            blogs: docs
        });
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
        res.redirect('/blogs');
    });
}

const blog_delete = (req, res) => {
    const blogId = req.params.id;
    Blog.deleteOne({ _id: blogId }, (err) => {
        if (err) throw err;
    })
    res.json({
        location: '/blogs'
    });
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_delete
}