const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Book = new Schema({
    name: { type: String, required: true, max: 255 },
    author: { type: String, required: true, max: 255 },
    image: { type: String, },
    slug: { type: String, slug: 'name' },
    price: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("books", Book);