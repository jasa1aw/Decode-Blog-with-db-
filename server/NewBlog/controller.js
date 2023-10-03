const NewBlog = require('./NewBlog');

const createBlog = async(req, res) =>{
    console.log(req.body);
    if(req.body.title.length != 0){
        new NewBlog({
            title: req.body.title,
            description: req.body.description
        }).save()
        res.redirect(`/detailBlog/${req.user._id}`)
    }else{
        res.redirect('/newblog?error=1');
    }
}
module.exports = {createBlog};