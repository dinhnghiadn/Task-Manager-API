const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD
    }
})

const sendWelcomeEmail = (email,name) =>{
    transporter.sendMail({
        from: '"Task app" <task-app@example.com>',
        to: email,
        subject: 'Successfully registration!',
        text: `Hello ${name}. Welcome to the app!`,
        html: '<b>Hello! </b><br> Welcome to the app.',
        // attachments: [{
        //     filename: 'test.jpg',
        //     path: 'src/email/unnamed.jpg'
        // }]
    })
}

const sendCancelationEmail = (email,name) =>{
    transporter.sendMail({
        from: '"Task app" <task-app@example.com>',
        to: email,
        subject: 'Sorry to see you go...',
        text: `Goodbye ${name}. Hope to see you back soon!`,
        html: '<b>Good bye! </b><br> Hope to see you back soon.',
    })
}
module.exports = {sendCancelationEmail,sendWelcomeEmail}

