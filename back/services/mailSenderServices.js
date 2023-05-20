const nodemailer = require("nodemailer");
require("dotenv").config();

const USER = process.env.YAHOO_USER;
const PASS = process.env.YAHOO_PASS;

exports.getTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 587,
      auth: {
        user: USER,
        pass: PASS,
      },
    });
    return transporter;
  } catch (error) {
    throw Error(error);
  }
};

exports.getMailOptions = (userEmail) => {
  try {
    const mailOptions = {
      from: USER,
      to: userEmail,
      subject: "Asunto del correo electrónico",
      html: "<h1>¡Hola!</h1><p>Este es un correo electrónico con contenido HTML.</p>",
    };
    return mailOptions;
  } catch (error) {
    throw Error(error);
  }
};
exports.sendEmail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.sendEmailToUser = async (userEmail) => {
  try {
    const transporter = await this.getTransporter();
    const mailOptions = await this.getMailOptions(userEmail);
    await this.sendEmail(transporter, mailOptions);
  } catch (error) {
    throw Error(error);
  }
};
