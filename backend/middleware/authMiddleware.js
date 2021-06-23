const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

//Check if user is Signed in
exports.isSignedIn = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const authToken = authHeader && authHeader.split(" ")[1];

  if (!authToken) return res.status(401).json({ error: "User is not logged in..." });

  jwt.verify(authToken, process.env.JWT_SECRETS, (err, decodedValue) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "Invalid Access Token found!" });
    }

    req.auth = decodedValue;
    next();
  });
};

exports.isAuthorized = (req, res, next) => {
  //req.userProfile is populated by getUserById method
  //req,auth is populated when isSigned verify jwt token successfully
  const checker = req.userProfile && req.auth && req.auth.id == req.userProfile._id;
  if(!checker) {
    return res.status(401).json({ error: 'Unauthorized Access'});
  }
  next();
};

//isAdmin check
exports.isAdmin = (req, res, next) => {
  const { isAdmin } = req.userProfile;
  
  if (!isAdmin) {
    return res.status(401).json({ error: "User is not an admin" });
  }

  next();
};

exports.getUserByOtp = async (req, res) => {
  const { otp } = req.body;

  const hashedOtp = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

    const user = await User.findOne({ 
      encryptOtp: hashedOtp.toString(),
      otpExpires: { $gt: Date.now() } 
    });
 
    if(!user) {
      return res.status(408).json({error: 'Invalid or Expired OTP'});
    }
    
    // req.profile = user;
    res.status(200).json({ userResetId: user._id});
    return;
}
