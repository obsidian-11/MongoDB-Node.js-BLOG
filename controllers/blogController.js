

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


module.exports = {
    blog_index,
    blog_create_get
}