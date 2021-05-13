const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

//oauth2 Client configuration
const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
})

exports.userSignup = async (req, res) => {
  const {email} = req.body; 
  
  User.findOne({ email }).then((doc) => {
    if (doc) {
      return res.json({ error: "User with this Email Already exist" });
    }
  });

  try {
    const accessToken = await oauth2Client.getAccessToken();
    const jwtToken = jwt.sign(req.body, process.env.JWT_SECRETS, {expiresIn: '10m'})

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Verify You Email by Clicking the Link",
      html: `
        <a href='https://google.com'>Activation Link</a>
        <p>Link Will Expire in 10 minutes </p>
        <p>${jwtToken}</p>
      `
    }

    res.status(200).json({ message: 'Please check Email for activation link' })
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
  }
}


exports.userEmailVerification = async (req, res) => {
  const { token } = req.body;

  if(!token) return res.status(404).json({error: 'Token Not Found'});

  jwt.verify(token, process.env.JWT_SECRETS, (err, decodedToken) => {
    if(err) {
      return res.status(400).json({error: 'Expired Token or Link'});
    }

    User.findOne({ email: decodedToken.email }).then((doc) => {
      if (doc) {
        return res.json({ error: "User with this Email Already exist" });
      }
    });

    const userData = decodedToken;
    const user = new User(userData);

    user
      .save()
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  })
};


exports.userSingin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({ error: "User not found in DB" });
      }

      if (!doc.authenticate(password)) {
        return res
          .status(401)
          .json({ error: "User Email and Password do not match" });
      }

      const { _id, name, isAdmin, email, gender, city } = doc;

      //Generating a user access token
      const accessToken = jwt.sign(
        { name, isAdmin, id: _id },
        process.env.JWT_SECRETS
      );

      //putting token into cookie
      res.cookie("token", accessToken);

      return res.status(200).json({
        token: accessToken,
        userData: { id: _id, name, email, isAdmin, gender, city },
      });
    })
    .catch((err) => console.log(err));
};

//authentication
exports.isSignedIn = (req, res, next) => {
  const {token} = req.cookies;
  
  if(!token) {
    return res.status(401).json({'error': 'User is not logged in'});
  }

  req.user = {auth: 'auth'};
  next();
}

//authenticating user passed using bearer
exports.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const authToken = req.user && authHeader && authHeader.split(' ')[1]

  if(!authToken) return res.status(401).json({error: 'Unauthorized'});
  jwt.verify(authToken, process.env.JWT_SECRETS , (err, decodedValue) => {
    if(err) {
      return res.status(401).json({'error': 'Access Denied due to Invalid Token'});
    }

    req.user = decodedValue;
    next();
  });

}

//isAdmin check
exports.isAdmin = (req, res, next) => {
  const {isAdmin} = req.user;
  
  if(!isAdmin) {
    return res.status(401).json({error: 'User is not an admin'});
  }

  next();
}