const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'noreply@followerstudio.fr',
            pass: 'Paris75**',
        },
    });
    const mailOptions = {
        from: 'noreply@followerstudio.fr',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };
    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;