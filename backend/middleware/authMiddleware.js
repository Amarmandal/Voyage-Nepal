const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');


//
exports.isSignedIn = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "User is not logged in" });
  }

  req.user = { auth: "auth" };
  next();
};

//authenticating user passed using bearer
exports.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const authToken = req.user && authHeader && authHeader.split(" ")[1];

  if (!authToken) return res.status(401).json({ error: "No authorized token found" });

  if(req.cookies.token !== authToken) {
    res.status(401).json({ error: "Invalid authorized token" });
    return;
  }

  jwt.verify(authToken, process.env.JWT_SECRETS, (err, decodedValue) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "Access Denied due to Invalid Token" });
    }

    req.user = decodedValue;
    next();
  });
};

//isAdmin check
exports.isAdmin = (req, res, next) => {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    return res.status(401).json({ error: "User is not an admin" });
  }

  next();
};

exports.getUserByOtp = async (req, res, next, otp) => {
  const hashedOtp = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

    const user = await User.findOne({ 
      encryptOtp: hashedOtp.toString(),
      otpExpires: { $gt: Date.now() } 
    });
 
    if(!user) {
      return res.status(408).json({error: 'Otp Has Expired'});
    }
    
    req.profile = user;
    next()
}
