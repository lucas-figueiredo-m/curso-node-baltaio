const config = require('../config');
const sendgrid = require('@sendgrid/mail')


exports.send = async (to, subject, body) => {
    sendgrid.setApiKey(config.sendgridKey)
    sendgrid.send({
        to: to,
        from: 'lucasfigueiredo285@gmail.com',
        subject: subject,
        html: body
    })
}