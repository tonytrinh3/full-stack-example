const passport = require ('passport');

module.exports = (app) =>{
    //router handler
    //googlestrategy from passport.use has internal identifier of "google", that is why you can use "google"
    //scope tells google server what access we want to have in this user's profile - we are asking google to give access to user's profile info and email
    ///auth/google is the http attachement at the end of local:5000/auth/google, same for the rest of the links below
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
    //logout attached to request 
    //kills the coookie that is attached to the id 
    //says thats it, you are not that user anymore
    //will show blank screen. req.user is gone
    ///api/current_user will be blank too bc we logged out
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });
    //req is request, res is outgoing response
    
    app.get('/api/current_user', (req,res) => {
        //test to see who logged via oauth flow, and logged into application, can now access user
        res.send(req.user);
    });
}