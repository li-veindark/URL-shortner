const passport = require("passport");
const router = require('express').Router();
const ShortUrl = require("../models/shortUrl");
const User = require("../models/user")


const authCheck = (req, res, next) => {

 // console.log(req.user);
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, async (req, res) => {
    const shortUrls = await ShortUrl.find({googleId:req.user.googleId});
    const user = await User.findOne({googleId:req.user.googleId});
    
    res.render('profile', {user:user,shortUrls:shortUrls});
});

//Routes for implementing the short-url.



    

router.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl , name : req.body.name  , googleId : req.user.googleId});
    
    res.redirect('/profile/')
  });
  
  
  
  router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    
    res.redirect(shortUrl.full)
  });
  
  
  //To delete items:
  router.post('/shortUrls/delete', async (req, res) => {
    await ShortUrl.deleteOne({id:req.params.id});
  
    res.redirect('/profile/');
  });
  
  
  
    //For search functionality;
  router.get("/search", async(req,res) => {
  
    res.redirect('/profile/')
  });
  
  router.post('/search', async (req, res) => {
    const query = req.body.query; 
    const searchResults = await ShortUrl.find({ name: { $regex: query, $options: 'i' }});
    
    res.render('search', { searchResults: searchResults });
  });



module.exports = router;