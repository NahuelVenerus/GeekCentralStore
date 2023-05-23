const nodemailer = require("nodemailer");
require("dotenv").config();

exports.getTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
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
      from: process.env.MAIL_USER,
      to: userEmail,
      subject: "Asunto del correo electrónico",
      html: "<h1>¡Hola!</h1><p>Estamos probando de mandar un mail con HTML</p>",
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
