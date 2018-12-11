const express = require ('express');
//require keyword to get express - used for node.js

const app = express();//this is exciting
//calling express like a function that generates a new application that runs like an express app
//most project will use one app

//app.get = brand new route handler 
//get - route hander to watch http methods
//get = get info about some render
// '/' tell browser to excute router hander based on something type for example, if you go to "/greeting", this app.get will excute
//req = request = javascript object that represents the incoming request = so there is some data that says a little about who is making the request and some associated data with it  
//res = response = res object = represent the response or the data that is about to be sent back to the person whoever made the incoming request 
//body of request res.send = tell express we want to immediately close the request, and send back response contain the json hi: there

app.get('/',(req,res) => {
    res.send({hi:'theress'});
});

//all caps to allow engineer to know that this const isn't to be changed lightly
//whenever Haruku runs our app, has ability to inject environement variable. enviornment variable are set in the underlining run time that node is running on top off. 
//we have to wait until last second until haruku tells us our port to use
//in node environment, we will use 5000. if haruku doesn't give anythign to us, use 5000. if haruku give something to us, then use haruku'
const PORT = process.env.PORT || 5000;

//express telling node.js "hey watch for any traffic coming into port 5000" hi 
app.listen(5000);

//http://localhost:5000/