const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
   title: {
       type: String,
       required: true
   }
});

const Category = mongoose.model('Category', CategoriesSchema);
module.exports = Category;