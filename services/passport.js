const passport = require ('passport');
const mongoose = require ('mongoose');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
//passport-google-oauth imports several properties
const keys = require('../config/keys');

const User = mongoose.model('users');
//one argument into mongoose means trying to fetch something
//two argument into moongoose means we are trying to load something like "require()"

//done is common in passport 
//user.id is the user.id that is assigned to the google user in mongoDB (in mlab)
//using this user.id is easier to homogenize different types of log in, either via fb, google, twitter, etc.
passport.serializeUser((user,done) => {
    done(null,user.id);
});
//taking id and put it into mongoose
passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{
            done(null,user);
        })
})

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
            //user.findone is an async command
            //.then this is a js promise
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser){
                        //we already have a record with a given profile ID
                        //done tells passport we are done
                        //null states that there is no error
                        //existingUser tells passport here is user we found or created
                        done(null, existingUser);
                    } else{
                        //we don't have a user record with this ID, make a new record
                        //anytime we save something to mongo database, it is async operation
                        //new User creates a mongoose model instance 
                        //a model instance represents a single record inside our collection
                        //we then save that instance
                        //then in callback (then()) we get another model instance, user
                        //represents same underlying record inside our collection
                        //we see the new User not as fresh or not as new as our "user" in the then bc async property
                        new User ({googleId: profile.id})
                        .save()
                        //to state that the user is successfully saved
                        //user is input variable for function, single variable function
                        
                        .then(user => done(null,user));
                    }

                })

            
        }
    )
);
//new googlestrategy - create new instance of google passport strategy - hey application i want to some how authentic with google
//inside googlestrategy parethesis "constructor" - going to pass some config to tell google strategy how to authentic users inside our application 
//passport.use - generic register - to say hey passport you know how to handle authentication in generation - but you don't know how to authenticate a specific user or a provider
//you can think passport.use - hey passport i want you to be aware that there is a new strategy available - it is googlestrategy

//need to register google oath api to know that our website can be trusted for google to send authentication info 

