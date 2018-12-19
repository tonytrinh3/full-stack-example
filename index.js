const express = require ('express');
//require keyword to get express - used for node.js
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
//passport-google-oauth imports several properties

const keys = require('./config/keys');

const app = express();//this is exciting
//calling express like a function that generates a new application that runs like an express app
//most project will use one app



passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            //route user will be sent to after user grant permission to application
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log ('access token: ', accessToken);
            console.log ('refresh token: ', refreshToken);
            console.log ('profile: ', profile);
        }
    )
);
//new googlestrategy - create new instance of google passport strategy - hey application i want to some how authentic with google
//inside googlestrategy parethesis "constructor" - going to pass some config to tell google strategy how to authentic users inside our application 
//passport.use - generic register - to say hey passport you know how to handle authentication in generation - but you don't know how to authenticate a specific user or a provider
//you can think passport.use - hey passport i want you to be aware that there is a new strategy available - it is googlestrategy

//need to register google oath api to know that our website can be trusted for google to send authentication info 

//router handler
//googlestrategy from passport.use has internal identifier of "google", that is why you can use "google"
//scope tells google server what access we want to have in this user's profile - we are asking google to give access to user's profile info and email
app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope:['profile','email']
    })
)

//handle callback
//when user hit this callback, we will have the scope code already and then google will handle this request differently
//google will not kick user back to oauth flow, it will exchange code for actual user profile
app.get (
    '/auth/google/callback', 
    passport.authenticate('google')
)

//all caps to allow engineer to know that this const isn't to be changed lightly
//whenever Haruku runs our app, has ability to inject environement variable. enviornment variable are set in the underlining run time that node is running on top off. 
//we have to wait until last second until haruku tells us our port to use
//in node environment, we will use 5000. if haruku doesn't give anythign to us, use 5000. if haruku give something to us, then use haruku'
const PORT = process.env.PORT || 5000;

//express telling node.js "hey watch for any traffic coming into port 5000" hi 
app.listen(PORT);

//http://localhost:5000/

//app.get = brand new route handler 
//get - route hander to watch http methods
//get = get info about some render
// '/' tell browser to excute router hander based on something type for example, if you go to "/greeting", this app.get will excute
//req = request = javascript object that represents the incoming request = so there is some data that says a little about who is making the request and some associated data with it  
//res = response = res object = represent the response or the data that is about to be sent back to the person whoever made the incoming request 
//body of request res.send = tell express we want to immediately close the request, and send back response contain the json hi: there


//app.get('/',(req,res) => {
//    res.send({hi:'theress'});
//});
