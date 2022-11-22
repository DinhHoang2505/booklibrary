const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    title: { type: String, required: true },
    description: { type: String, max: 255 },
    image: { type: String, },
    slug: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("books", Book);