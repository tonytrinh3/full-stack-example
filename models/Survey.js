const mongoose = require ('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema ({
    title: String,
    body: String,
    subject: String,
    //comma-separated list of email addressed to send survey to, so needs to be an array for user put email
    //recipients: [String],
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    //to make mongoose understand that it is going to be a reference to a very particular user or to another instance of a user to make mongoose
    _user:{type:Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date

});

//surveys collection

mongoose.model('surveys', surveySchema);