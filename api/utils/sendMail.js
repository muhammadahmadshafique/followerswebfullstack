const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    secure: true,
    port: 465,
    auth: {
      user: "noreply@followerstudio.fr",
      pass: "Paris75**",
    },
  });
  const mailOptions = {
    from: "noreply@followerstudio.fr",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
