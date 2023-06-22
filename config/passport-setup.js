const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user");
require('dotenv').config();



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});



passport.use(
    new GoogleStrategy(
        {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:'/auth/google/redirect',

       }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                //console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    user_name: profile.displayName,
                    thumbnail: profile.photos[0].value
                }).save().then((newUser) => {
                    //console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);