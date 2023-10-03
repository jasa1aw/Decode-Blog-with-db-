const NewBlog = require('../NewBlog/NewBlog');
const editBlog = async(req, res) => {
    console.log(req.body);
    await Product.updateOne(
        {_id: req.body.id},
        {
            title: req.body.title,
            description: req.body.description
        }
    )
    res.redirect(`/detailBlog/${req.user._id}`)
}
module.exports = {editBlog}