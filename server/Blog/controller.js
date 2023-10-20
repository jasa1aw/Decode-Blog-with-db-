const Blog = require('./Blog');
const fs = require('fs');
const path = require('path');

const createBlog = async(req, res) =>{
    // console.log(req.body);
    const newBlog = {};
    try {
        if(
            req.body.title.length != 0 &&
            req.body.description.length != 0 &&
            req.body.category.length != 0
        ){
            newBlog.title = req.body.title
            newBlog.description = req.body.description
            newBlog.author = req.user._id
            if(req.body.category !== 'Выберите категорию'){
                newBlog.category = req.body.category
            }
            if(req.file){
                newBlog.image = `/img/blogs/${req.file.filename}`
            }
            await new Blog(newBlog).save()
            res.redirect(`/profile/${req.user._id}`)
        }else{
            res.redirect('/new?error=1');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/new?error=1');    
    }
}

const editBlog = async(req, res) =>{
    console.log(req.params);
    try {
        if(
            req.body.title.length != 0 &&
            req.body.description.length != 0 &&
            req.body.category.length != 0
        ){
            const blogs = await Blog.findById(req.body.id);
            console.log(blogs);
            if(req.body.category !== 'Выберите категорию'){
                blogs.category = req.body.category
            }
            if(req.file){
                fs.unlinkSync(path.join(__dirname + '../../../public' + blogs.image))
                blogs.image = `/img/blogs/${req.file.filename}`
            }
            blogs.title = req.body.title
            blogs.description = req.body.description
            blogs.save()
            res.status(200).redirect(`/profile/${req.user._id}`)
        }else{
            res.status(400).redirect(`/edit/${req.body.id}?error=1`)
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).redirect('/edit?error=1');
    }
}
const deleteBlog = async(req, res) =>{
    const blog = await Blog.findById(req.params.id)
    console.log(blog);
    if(blog){
        if(blog.image == 'undefined'){
            fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
        }
        await Blog.deleteOne({_id: req.params.id})
        res.status(200).send('ok')
    }else{
        res.status(404).send('Not found')
    }
}
module.exports = {createBlog, editBlog, deleteBlog};


