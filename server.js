const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}));


app.get('/blog', (req, res) => {  //Retrieve all blog posts
    res.render('blog', {listBlogs: blogs   //Do not specify path details or file type
    })
})

app.get('/blog/:blogid', (req, res) => {   //Retrieve one blog post
    res.render('index', {   //Do not specify path details or file type
    })
})

app.post('/blog', (req, res) => {
    console.log(req.body);
    let blog = req.body;
    blogs.push(new BlogPost(blog.title, blog.summary, blog.content, blog.author, new Date()));
    res.redirect('/blog');
})

app.delete('/blog/:blogid', (req, res) => {    //Delete and existing post
    res.render('index', {   //Do not specify path details or file type
    })
})

app.get('/addpost', (req, res) => {
    res.render('addpost');
})


app.listen(8080, function () {
    console.log("Listening")
})


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

//Constructor
function BlogPost(title, summary, content, author, created) {
    this.title = title,
    this.summary = summary,
    this.content = content,
    this.author = author,
    this.created = created
}