const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./recipient');

const SurveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    recipients: [recipientSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'user'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('survey', SurveySchema);