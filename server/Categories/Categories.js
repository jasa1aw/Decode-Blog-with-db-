const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
    name:String,
    key: String,
});

module.exports = mongoose.model('category', CategoriesSchema)