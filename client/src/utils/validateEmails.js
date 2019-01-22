//returning function so lower case
//lec 157 and 158
//https://emailregex.com/ to validate email
//only check if what you put in takes form of regular email structure; not actually ping email to see if actual email
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    const invalidEmails = emails
    .split(',')
    //map takes a string or takes a value out of the array that we are working with and then whatever we return from this function will be added to a new array and then that new array is eventually what gets returned 
    //every single email, we trim it and we return the trimmed string of all those trimmed emails are assembled together and returned from this entire function call
    //and so the end result ends up on the emails array
    .map(email => email.trim())
    //we are going to look at every individual email and we are going to check to see whether or not it is valid
    //if it is not valid then we are going to keep that email inside the list
    //but if email is valid, then we are going to dump it out of the list because our goal is to validate email list
    //.filter is similar to map in terms of running through each element of the array
    //i want to capture emails the fails the test. 
    //if re.test(email) returns false then it is true/good then keep email
    .filter (email => re.test(email) === false)

    //if there is anything in invalidEmails
    if (invalidEmails.length){
        //back ticks are used to write template strings
        return `These emails are invalid: ${invalidEmails}`;
    }




};