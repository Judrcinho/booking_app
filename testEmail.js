const sgMail = require('@sendgrid/mail');
const key = require('./config/dev');

sgMail.setApiKey(key.sendGridKey);

const msg = {
    to: 'evgeniya.yurieva@gmail.com',
    from: 'evgeniya.yuryeva@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail.send(msg);