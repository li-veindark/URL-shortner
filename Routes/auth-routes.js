const router = require("express").Router();
const passport = require("passport");
require('dotenv').config();
const User = require("../models/user")
const bcrypt = require("bcrypt");
var cookieSession = require('cookie-session')



//REGISTER ROUTES --->

// router.get("/register", (req,res) => {
//     res.render("register")
// });


// router.post('/register',(req,res)=>{
//     var {user_name,email,password}=req.body;
//     //console.log(user_name,email,password);

//     if(!email || !password || !user_name)
//     {
//         return res.status(200).json({error:"Add all data"})
//     }
//     bcrypt.hash(password,10)
//     .then((hashedpw)=>{
//         User.findOne({email:email})
//         .then((savedUser)=>{
//             if(savedUser){
//                  res.status(422).json({error:"User already exists with that email"})
//                 //  res.redirect('/auth/login');
//             }
//             const user=new User({
//              user_name:user_name,
//              email:email,
//              password:hashedpw,
             
//          })
//          user.save()
//          .then((user)=>{
//              //res.json({message:"Saved Successfully"})
//              //console.log(user.email);
//              res.redirect('/profile/')
//          })
//          .catch((err)=>{
//              console.log(err)
//          })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })   

// })
// .catch((err)=>{
//     console.log(err)
// })
// })

// // LOGIN ROUTES--->




// router.post("/login", (req, res) => {
    
//     const { email, password } = req.body;
//     User.findOne({ email }).then(user => {
//        if (!user) {
//           return res.status(404).json({ email: "Email not found" });
//        }
 
//        bcrypt.compare(password, user.password).then(isMatch => {
//           if (isMatch) {
//              const payload = {
//                 id: user.id,
//                 user_name: user.user_name
//              };
//              jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//                 if (err) {
//                    console.log(err);
//                 }
//                 return res.json({
//                    success: true,
//                    token: "Bearer " + token
//                 });
//              });
//           } else {
//              return res.status(400).json({ password: "Password Incorrect" });
//           }
//        });
//     });
//  });

//<--Google Authentication -->


router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

//route for callbackURL
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    res.redirect('/profile/');
})

router.get('/logout', (req, res) => {
    req.logout();
    // req.session = null;
    res.redirect('/');
});


module.exports = router;