const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { getTransporter } = require("../utils/sendEmail");

exports.userSignup = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({email});

    if(user) {
      // if(req.profilePath) {
      //   //delete the existing file
      //   fs.unlink(req.profilePath, (err) => {
      //     if(err) {
      //       throw err;
      //     }
      //   });

      // }
      res.status(302).json({ error: 'User with this Email Already exist'})
      return;
    }

    const jwtToken = jwt.sign({...req.body, profileImgURL: req.profilePath}, process.env.JWT_SECRETS, {
      expiresIn: "10m",
    });

    const transporter = await getTransporter();
    const mailOptions = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Verify You Email by Clicking the Link",
      html: `
        <a href='https://google.com'>Activation Link</a>
        <p>Link Will Expire in 10 minutes </p>
        <p>${jwtToken}</p>
      `,
    };

    res.status(200).json({ message: "Please check Email for activation link" });
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
  }
};

exports.userEmailVerification = async (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(404).json({ error: "Token Not Found" });

  jwt.verify(token, process.env.JWT_SECRETS, (err, decodedToken) => {
    if (err) {
      return res.status(400).json({ error: "Expired Token or Link" });
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
        const { _id, name, email, isAdmin, gender, city } = doc;
        res.status(200).json({id: _id, name, email, isAdmin, gender, city });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ error: 'User Account Cannot be created!'})
      });
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

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User associated with this mail not found" });
    }

    const otp = user.generateOtp();
    await user.save();

    const transporter = await getTransporter();
    const mailOptions = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Verify You Email by Clicking the Link",
      html: `
          <a href='https://google.com'>Activation Link</a>
          <p>This otp will expire in 5 minutes</p>
          <p>${otp}</p>
        `,
    };

    res.status(200).json({ message: "Please check Email for OTP" });
    const info = await transporter.sendMail(mailOptions);
    return info;

  } catch (error) {
    console.log(error);
  }
};

exports.resetPassword = async (req, res) => {
  const { password } = req.body;
  const user = req.profile;
  
  user.password = password;
  user.encryptOtp = undefined;
  user.otpExpires = undefined;

  await user.save();

  res.status(200).json('Password Reset Successful');
}
