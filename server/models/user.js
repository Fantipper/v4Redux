/** Set up database schema */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Create Schema to represent a User
// defining fields and types as objects of the Schema
const User = new Schema({
    // email: {
    //     type: String,
    //     require: true,
    //     unique: 1,
    //     trim: true
    // },
    // password: {
    //     type: String,
    //     require: true,
    //     minlength: 6
    // }
});

User.plugin(passportLocalMongoose, {
    usernameField: "email",
    usernameUnique: true
});

// export the model so we can access it outside of this file
module.exports = mongoose.model("User", User);