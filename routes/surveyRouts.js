const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const mongoose = require('mongoose');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { mail } = require('sendgrid');

const Survey = mongoose.model('survey');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        let survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
    
            req.user.credits -= 1;
            const user = await req.user.save();
    
            res.send(user);
        } catch(err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!')
    })
}