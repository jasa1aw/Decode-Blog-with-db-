const Blog = require('./Blog');

const createBlog = async(req, res) =>{
    console.log(req.body);
    if(req.body.title.length != 0){
        new Blog({
            title: req.body.title,
            description: req.body.description
        }).save()
        res.redirect(`/profile/${req.user._id}`)
    }else{
        res.redirect('/newblog?error=1');
    }
}
module.exports = {createBlog};