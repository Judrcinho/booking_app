const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        let charge = await stripe.charges.create(
            {
                amount: 500,
                currency: 'usd',
                source: req.body.id,
                description: '5$ for 5 emails'
        }
        );
                
        req.user.credits += 5;
        
        let user = await req.user.save();

        res.send(user);
    })
}