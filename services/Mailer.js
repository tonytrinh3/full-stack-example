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

        //lec 135
        this.sgApi = sendgrid(keys.sendGridKey);
        //who this email appears to be sent from
        //people using emaily service to send our survey
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html',content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();

    }

    formatAddresses(recipients){
        //need parathesis around {} in order to do destructuring with an arrow function
        return recipients.map( ({email}) => {
            return new helper.Email(email);

        })
    }
    // lec 133 - just write this code from sendgrid
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    //lec 135
    //toJSON() converts subject, recipients, body, from_email to JSON data and then take the entire thing and send it 
    async send(){
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            //toJSON() is defined by mail base class
            body: this.toJSON()
        });
        //this sends to sendgrid
        const response = await this.sgApi.API(request);
        return response;
    }

}

module.exports = Mailer;