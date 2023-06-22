const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortId = require('shortid')

const shortUrlSchema = {
    
    full: {
      type: String,
      required: true
    },
    short: {
      type: String,
      default: shortId.generate
    },
    name:{
      type:String,
      required: true
      
    },
    googleId:String
   
  }


const ShortUrlSchema = new Schema(shortUrlSchema);

module.exports = mongoose.model("ShortUrl",ShortUrlSchema);
