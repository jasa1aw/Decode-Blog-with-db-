const Blog = require('./Blog');

const createBlog = async(req, res) =>{
    // console.log(req.body);
    if(req.body.title.length != 0){
        await new Blog({
            title: req.body.title,
            description: req.body.description,
            image: `/img/blogs/${req.file.filename}`,
            category: req.body.category,
            author: req.user._id
        }).save()
        res.redirect(`/profile/${req.user._id}`)
    }else{
        res.redirect('/new?error=1');
    }
}

const editBlog = async(req, res) =>{
    console.log(req.params);
    if(req.body.title.length != 0){
    }else{
        res.redirect(`/edit/${req.params.id}?/error=1`)
    }
}
module.exports = {createBlog, editBlog};