const mongoose = require ('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema ({
    title: String,
    body: String,
    subject: String,
    //comma-separated list of email addressed to send survey to, so needs to be an array for user put email
    recipients: [String],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0}

});

mongoose.model('surveys', surveySchema);