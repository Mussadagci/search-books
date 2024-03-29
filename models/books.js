const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: {
        thpe: String, 
        required: true
    },
    title: {
        type: String, 
        required: true,

    },
    authores: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    href: {
        type: String, 
        required: true,
        unique: true
    },
    thumbnail: {
        type: String, 
        required: true
    }
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;