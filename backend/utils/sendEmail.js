const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

//oauth2 Client configuration
const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

exports.getTransporter = async () => {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    //oauth Token method
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: process.env.EMAIL,
    //     clientId: process.env.OAUTH_CLIENT_ID,
    //     clientSecret: process.env.OAUTH_CLIENT_SECRET,
    //     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    // });

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
