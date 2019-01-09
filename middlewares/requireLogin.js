//for naming component, when exporting function, lower case
//when exporting components, upper case

//function will be middleware
//lect 106
//middleware is a function that takes the incoming request and has the ability to modify the request inside the body, inside the function
//req request object, res - response object
//next is a function called when our middleware is complete or all finished running
//the next middleware is kind of being that done callback in some of the passport 
module.exports = (req, res, next) =>{
    if (!req.user){
        return res.status(401).send({error: 'You must go log in!'});
    }
    //move on to next part of our middleware chain
    //if there is a user, let user to move on to the actual request handler
    next();
};