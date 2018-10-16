const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/blog', (req, res) => {  //Retrieve all blog posts
    res.render('blog', {
        listBlogs: blogs   //Do not specify path details or file type
    })
})

app.get('/blog/:blogid', (req, res) => {   //Retrieve one blog post
    res.render('post', blogsId)
    let post = {}
    for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === id) {
        post = blogs[i]
        break;
    }
}
})


app.post('/blog', (req, res) => {
    // console.log(req.body);
    let blog = req.body;
    blogs.push(new BlogPost(blog.id, blog.title, blog.summary, blog.content, blog.author, new Date()));
    res.redirect('/blog');
    console.log(blogs);   //TEST
})

app.delete('/blog/:blogId', (req, res) => {    //Delete and existing post
})


app.get('/addpost', (req, res) => {
    res.render('addpost');
})


app.listen(8080, function () {
    console.log("Listening")
})


//Starter array that gets populated using .push. Note ID key is generated from title.
let blogs = [
    {
        id: 'blog-title-1',
        title: 'Blog Title 1',
        summary: 'This is a blog summary.',
        content: 'This is the blog content',
        author: 'John Smith',
        created: 'February 5, 2018'
    },
    {
        id: 'blog-title-2',
        title: 'Blog Title 2',
        summary: 'This is a blog summary.',
        content: 'This is the blog content',
        author: 'John Smith',
        created: 'February 6, 2018'
    },
]

//Constructor. NOTE that id was removed to get first part to work. We need to next generate id using the title. ID will then be used to generate the url.
function BlogPost(id, title, summary, content, author, created) {
    this.id = title.toLowerCase().replace(" ", "-")  //Later make it all lower case and replace spaces with '-'
    this.title = title,
        this.summary = summary,
        this.content = content,
        this.author = author,
        this.created = created
}