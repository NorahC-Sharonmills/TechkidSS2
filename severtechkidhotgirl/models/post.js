const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    author: {type: String, default: "User", required: true},
    contents: {type: String, required: true}
}, {
    _id: false
});

const PostSchema = new Schema({
    view: {type: Number, default: 0},
    image: {type: String, required: true},
    like: {type: Number, default: 0},
    author: {type: String, default: "User"},
    comments: [CommentsSchema],
    title: {type: String},
    descripstion: {type: String}
}, {
    timestamps: true // created at & update at
});

module.exports = mongoose.model("Post", PostSchema);