const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = {
    user_name: String,
    googleId: String,
    thumbnail:String,
   
}   
 

const UserSchema = new Schema(userModel);
module.exports = mongoose.model("User", UserSchema);