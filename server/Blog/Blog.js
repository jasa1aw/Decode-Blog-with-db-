const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    category: {type: Schema.Types.ObjectId, ref: "category"},
    author: {type: Schema.Types.ObjectId, ref: "user"},
    views: {type: Number, default: 0},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('blog', BlogSchema)