const nodemailer = require("nodemailer");

exports.getTransporter = async () => {
  try {
    //App password Method
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASSWORD
      }
    });

    return transporter;
  } catch (error) {
    console.log(error);
  }
};
