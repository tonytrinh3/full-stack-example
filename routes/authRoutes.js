const passport = require ('passport');

module.exports = (app) =>{
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
}