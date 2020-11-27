const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
const passport = require("passport")
const { Strategy } = require("passport")
app.use(passport.initialize());
app.use(passport.serializeUser())
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github').Strategy
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
let user = {}



passport.serializeUser((user, callback) => {
    callback(null, user);
});
  
passport.deserializeUser((user, callback) => {
    callback(null, user);
});



// // Strategy Github

passport.use(new GithubStrategy({
    clientID:"fde8addfa96f07140412",
    clientSecret:"cb787b08945b0e0afef00175540725b574121ce1",
    callbackURL: "http://localhost:5000/github/callback"
},
    (accessToken, refreshToken, profile, done) => {
        user = { ...profile };
        done(null, profile);
}));


app.get("/auth/github", passport.authenticate("github", {
    scope: ["email", "name"]
}));
app.get("/github/callback",
    passport.authenticate("github"),
        (req, res) => {
            console.log(res, "yes res");
            // res.send("this is home page!");
            // res.redirect("/landingpage");
            res.redirect('http://localhost:3000/home');
        });



// // Strategy Google


passport.use(new GoogleStrategy({
    clientID:"964664641845-s2tovgl7q4be6scs5brkuu42p7perfpa.apps.googleusercontent.com",
    clientSecret:"jsFt7oroDO6sUZN3kCXO6Nlt",
    callbackURL: "http://localhost:5000/google/callback"
},
    (accessToken, refreshToken, profile, done) => {
        user = { ...profile };
        done(null, profile);
}));


app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/google/callback",
    passport.authenticate("google"),
        (req, res) => {
            console.log(res, "yes res");
            // res.send("this is home page!");
            // res.redirect("/landingpage");
            res.redirect('http://localhost:3000/home');
        });





// // Strategy Facebook


passport.use(new FacebookStrategy({
    clientID:"977867876025456",
    clientSecret:"5b933f458b3811883355b53ef8b8d2b6",
    callbackURL: "https://localhost:5000/facebook/callback"
},
    (accessToken, refreshToken, profile, done) => {
        user = { ...profile };
        done(null, profile);
}));


app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/facebook/callback",
    passport.authenticate("facebook"),
        (req, res) => {
            console.log(res, "yes res");
            res.send("this is home page!");
            // res.redirect("/landingpage");
            // res.redirect('http://localhost:3000/home');
        });






// // Strategy Linkedin


passport.use(new LinkedInStrategy({
    clientID:"77f8f31uix0t08",
    clientSecret:"LuRkBMMEhPhATZXq",
    callbackURL: "http://localhost:5000/linkedin/callback"
},
    (accessToken, refreshToken, profile, done) => {
        user = { ...profile };
        done(null, profile);
}));


app.get("/auth/linkedin", passport.authenticate("linkedin"));
app.get("/linkedin/callback",
    passport.authenticate("linkedin"),
        (req, res) => {
            console.log(res, "yes res");
            // res.send("this is home page!");
            // res.redirect("/landingpage");
            res.redirect('http://localhost:3000/home');
        });






// app.get("/user", (req, res) => {
//     console.log("getting user data!");
//     res.send("getting user data!");
// })


// app.get("/auth/logout", (req, res) => {
//     console.log("logging out")
//     user = {}
//     res.redirect("login");
// })


const PORT = 5000;
app.listen(PORT,(req,res)=>{
    console.log("workinggggg")
});
    
