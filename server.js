const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose')
const authRoutes = require("./Routes/auth-routes");
const profileRoutes = require("./Routes/profile-routes")
const passportSetUp = require('./config/passport-setup');
require('dotenv').config();
const cookieSession = require("cookie-session");
const passport = require("passport");


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.use(cookieSession({
    
    name:'session',
    maxAge: 24*60*60*1000,
    keys: ['key1','key2'],
  }));



//initialize the passport
app.use(passport.initialize());
app.use(passport.session());




app.use("/auth" , authRoutes);
app.use("/profile", profileRoutes);
//setting-up the server

mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://prathamGoel:pratham123@cluster0.wgktfxg.mongodb.net/URL-shortner');
  }



app.get('/' , (req,res) => {
  res.render("home")
});


  

app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
  








