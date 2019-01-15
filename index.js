const express = require ('express');
//require keyword to get express - used for node.js
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
//keep track of user session or user authentication state by using cookies
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();//this is exciting
//calling express like a function that generates a new application that runs like an express app
//most project will use one app

//any time a post request or a put request or a patch request or anything else that has a request body that comes into our application. this middleware will parse the body and assign it to the req.body property of the incoming request object 
app.use(bodyParser.json());

//middlewear that operate on the incoming request before they are sent off to our request handler
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        //how long this cookie will last in browser
        //want cookie to last for 30 days
        //need to be passed in milliseconds
        keys: [keys.cookieKey]
    })
)
//middlewear
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require ("./routes/authRoutes");
authRoutes(app);
require('./routes/billingRoutes')(app);
//or require ("./routes/authRoutes")(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production'){
    //Express will serve up production assets
    //like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the route 
    //if user make request to route that code doesn't recognize, send to index.html
    const path = require ('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    });
}


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
