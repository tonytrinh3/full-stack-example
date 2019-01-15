const sendgrid = require ('sendgrid');
//could also be const { mail } = sendgrid;
const helper = sendgrid.mail;
const keys = require ('../config/keys');

//sending up a class called Mailer, something we are creating and we are extending the mail class provided inside of the sendgrid library
//so our mailer object, our class of mailer, now contains a bunch of functionality and a bunch of code and a bunch of setup that is closely tied or inherited, so to speak, from mail object in "helper.Mail"
//so remember react when we are looking at this
//can treat this like a normal react component in terms of syntax and set up
class Mailer extends helper.Mail {


}

module.exports = Mailer;