const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { getTransporter } = require("../utils/sendEmail");

exports.userSignup = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(302).json({ error: "User with this Email Already exist" });
    }

    const jwtToken = jwt.sign(
      { ...req.body, profileImgURL: req.profilePath },
      process.env.JWT_SECRETS,
      {
        expiresIn: "10m",
      }
    );

    const transporter = await getTransporter();
    const mailOptions = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Verify You Email by Clicking the Link",
      text: ' ',
      template: 'voyageregister',
      context: {
        email,
        jwtToken
      }
    };

    res.status(200).json({ message: "Please check Email for activation link" });
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
  }
};

exports.userEmailVerification = (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(404).json({ error: "Token Not Found" });

  jwt.verify(token, process.env.JWT_SECRETS, (err, decodedToken) => {
    if (err) {
      return res.status(400).json({ error: "Expired Token or Link" });
    }

    User.findOne({ email: decodedToken.email})
      .then(doc => {
        if(doc) {
          return res.json({ error: "Already Activated! Enjoy using our App!" });
        } else {
          const userData = decodedToken;
          const user = new User(userData);

          user.save()
          .then(doc => {
            const { _id, name, email, isAdmin, gender, city } = doc;
            return res.status(200).json({ id: _id, name, email, isAdmin, gender, city });
          })
          .catch(err => {
            return res.status(400).json({ error: "Error Activating your Account"})
          })
        }
      })
      .catch(err => {
        return res.status(400).json({ error: "Internal Server Error"})
      });
  });
}

exports.userSingin = (req, res) => {
  const { email, password } = req.body;

  if(email.length < 1 || password.length < 3) {
    return res.status(411).json({ error: 'Check if password length is > 1 and email field is not empty'});
  }

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

      return res.status(200).json({
        token: accessToken,
        userData: { id: _id, name, email, isAdmin, gender, city },
      });
    })
    .catch((err) => console.log(err));
};

exports.changeCurrentPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = req.userProfile;

  try {
    const isCurrentPasswordOk = user.authenticate(currentPassword);

    if(!isCurrentPasswordOk) {
      throw new Error('Current Password do not match');
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({success: "Password changed Successfully" });
    return;
  } catch (error) {
    res.status(403).json({ error: "Please check if your current password match"})
    return;
  }
}

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
      text: ' ',
      template: 'voyageotp',
      context: {
        email,
        otp
      }
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
  
  try {
    const user = req.userProfile;
    if(!user.encryptOtp) {
      throw new Error('Otp not found');
    }

    user.password = password;
    user.encryptOtp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json("Password Reset Successful");
    return;
  } catch (error) {
    return res.status(400).json({error: "Unable to Reset Password"});
  }
};

exports.handleSignout = async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.status(200).json({ message: 'User Signout successfully'});
  } catch (error) {
    return res.status(400).json({ error: "Cannot logout the user"});
  }
};
