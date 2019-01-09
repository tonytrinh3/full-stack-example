const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    //lec 106
    //saying, hey express any time someone makes a post request to "/api/stripe" (the route), here is a reference to a function (requireLogin function) to run whenever a request comes in
    //so express takes the reference to requireLogin and express will call requireLogin internally or call requireLogin itself whenever some request comes into the application
    //app.get, app.post - all route handler can pass in as many middleware as we want. the only requirement of express is that eventually one of the function inside the passed things within app.post etc has to process the request and eventually send back in response to the user 
    //that is the only requirement of express. it doesn't care how many little functions you pass through the route handler
    app.post('/api/stripe', requireLogin, async (req,res) => {
        //if passport did not find a user that was referenced inside the cookie including the request
        //if the user did not sign in
        //don't need this logic any more bc requireLogin is passed through the route handler
        //if (!req.user){
            //401 is error or forbidden
        //    return res.status(401).send({error: 'You must log in!'});

        //}

        //console.log(req.body);
        //to create a new charge. this will make a request over to the stripe api and tell it hey we want to finalize this transaction. we want to build the customer 5 dollar
        //lec 103
        //this allow charge to be fully successful
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: "$5 for 5 credits",
            source: req.body.id
        });
        //lec 104
        //doesn't save change to the database
        //req.user is set up automaticall by passport
        //we wired up passport inside the index.js file with passport initialize and passport session
        req.user.credits += 5;
        //user model in req.user
        //whenever we save a user model, by convention, we usually from that point on make reference to the copy of the model or the copy of the user that we just got back from the database
        //so it could be that now at this point in time, after making the save, this req.user copy of the user, copy of the model, might be old or stale. it might have outdated information inside of it
        //so just to make sure that we are always using the most possible, the most up to date as possible model at a given time, we might use of the user model that got returned from the save request but at the end of the day, req.user and const user represent the same user 
        const user = await req.user.save();
        //send the data we want to communicate back to the broswer 
        res.send(user);
        
    });

};