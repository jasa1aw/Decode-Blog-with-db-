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
        
        //     await Blog.updateOne(
        //         {_id: req.body.id},
        //         {
        //             title: req.body.title,
        //             description:  req.body.description,
        //             category: req.body.category,
        //         }
        //     )
        //     res.status(200).redirect(`/profile/${req.user._id}`)
        // }else{
        //     await Blog.updateOne(
        //         {_id: req.body.id},
        //         {
        //             title: req.body.title,
        //             description:  req.body.description,
        //         }
        //     )
        //     res.status(200).redirect(`/profile/${req.user._id}`)
        // }
        
    } catch (error) {
        console.log(error);
        res.status(400).redirect('/new?error=1');
    }
}
// const editFilm = async(req, res) =>{
//     console.log(req.params);
//     if(req.file && req.body.titleRus.length > 2 && 
//         req.body.titleEng.length > 2 && 
//         req.body.year > 0 &&
//         req.body.time > 10 &&
//         req.body.country.length > 0 &&
//         req.body.genre.length > 0)
//     {
//         const films = await Film.findById(req.body.id);
//         console.log(films);
//         fs.unlinkSync(path.join(__dirname + '../../../public' + films.image))
//         films.titleRus = req.body.titleRus
//         films.titleEng = req.body.titleEng
//         films.year = req.body.year
//         films.time = req.body.time
//         films.country = req.body.country
//         films.genre = req.body.genre
//         films.image = `/img/films/${req.file.filename}`
//         films.author = req.user._id
//         films.save()
//         res.status(200).redirect(`/admin/${req.user._id}`)
//     }else{
//         res.redirect(`/edit/${req.body.id}?error=1`)
//     }
// }

const deleteBlog = async(req, res) =>{
    const blog = await Blog.findById(req.params.id)
    console.log(blog);
    if(blog){
        fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
        await Blog.deleteOne({_id: req.params.id})
        res.status(200).send('ok')
    }else{
        res.status(404).send('Not found')
    }
}
module.exports = {createBlog, editBlog, deleteBlog};


