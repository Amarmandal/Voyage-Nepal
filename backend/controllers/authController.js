const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.userSignup = (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }).then((doc) => {
    if (doc) {
      return res.json({ error: "User with this Email Already exist" });
    }
  });

  const user = new User(req.body);

  user
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
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