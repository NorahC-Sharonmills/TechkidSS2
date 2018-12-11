const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true, min: 3},
    password: {type: String, required: true, min: 6, max: 18},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    fullname: {type: String, required: true}
});

module.exports = mongoose.model("User", UserSchema);
