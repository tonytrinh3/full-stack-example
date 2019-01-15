const sendgrid = require ('sendgrid');
//could also be const { mail } = sendgrid;
const helper = sendgrid.mail;
const keys = require ('../config/keys');

//sending up a class called Mailer, something we are creating and we are extending the mail class provided inside of the sendgrid library
//so our mailer object, our class of mailer, now contains a bunch of functionality and a bunch of code and a bunch of setup that is closely tied or inherited, so to speak, from mail object in "helper.Mail"
//so remember react when we are looking at this
//can treat this like a normal react component in terms of syntax and set up
class Mailer extends helper.Mail {
    //constructor is called automatically when you use a new keyword
    //gives us an opportunity to do some amount of setup or initialization inside of the class instance
    //constructor function is going to be called automatically for us. any arguments that we use when we use the new keyword will be providedas arguments to the constructor function
    //we can call the mailer in the future with a new subject, new list of recipients, and some different contents
    constructor({subject, recipients}, content){
        super();

        //who this email appears to be sent from
        //people using emaily service to send our survey
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html',content);
        this.recipients = this.formatAddresses(recipients);

    }

}

module.exports = Mailer;