const User = require("../models/userModel");
const { bucket } = require("../utils/uploadHelper");
const { getIdFromURl } = require('../utils/imageIdExtract');
const { v4: uuid } = require('uuid');

//get user by id
exports.getUserById = async (req, res, next, userId) => {
  try {
    const user = await User.findById({ _id: userId });
    if (!user) {
      res.status(404).json({ error: "Invalid User Id" });
      return;
    }
    req.userProfile = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Unknow Error" });
  }
};

exports.getUserDetails = async (req, res) => {
  const currentUser = req.userProfile;
  if(currentUser) {
    currentUser.salt = undefined;
    currentUser.hashPassword = undefined;
    return res.status(200).json(currentUser);
  }

  return res.status(404).json({error: 'Cannot fetch user details'});
}

//only admin
exports.removeUserById = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.userProfile._id });
    res.status(200).json("User Has been successfully deleted");
    return;
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "User cannot be deleted" });
    return;
  }
};

exports.updateUserRole = async (req, res) => {
  const user = req.userProfile;
  user.isAdmin = req.body.role;

  try {
    await user.save();
    res.status(200).json({message: 'User Role has been successfully changed'})
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Unable to change the user role'})
    return;
  }
}

//update User
exports.updateUserById = async (req, res) => {
  const user = req.userProfile;
  const updateData = req.body;
  const updatedUser = {...user, updateData };
  try {
    await updatedUser.save()
    res.send(200).json({ updatedUser });
    return;
  } catch(err) {
    console.log(err);
    res.status(400).json({ error: 'User cannot be updated'});
  }
}


// exports.updateUserById =  asy

//upload User Profile Picture
exports.uploadPhoto = (req, res, next) => {
  if (req.multerError) {
    res.status(400).json(req.multerError);
    return;
  }

  if (!req.file) {
    res.status(400).json({ error: "No file uploaded." });
    return;
  }

  const blob = bucket.file(
    "images/" + uuid() + req.file.originalname.replace(/ /g, "_")
  );

  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream
    .on("error", (err) => {
      console.log(err);
      next(err);
    })
    .on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      const user = req.userProfile;
      user.profileImgURL = publicUrl;
      
      try {
        await user.save();
        res.status(200).json('Profile Picture has been set successfully');
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error uploading user profile'})
        return;
      }
    })
    .end(req.file.buffer);
};


//update profile picture of the user
exports.updatePhoto = (req, res, next) => {
    if (req.multerError) {
      res.status(400).json(req.multerError);
      return;
    }
  
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded." });
      return;
    }

    const fileId = getIdFromURl(req.userProfile.profileImgURL);
    const blob = bucket.file(fileId);

    const blobStream = blob.createWriteStream({
      resumable: false,
    });
  
    blobStream
      .on("error", (err) => {
        console.log(err);
        next(err);
      })
      .on("finish", async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

        if(req.userProfile.profileImgURL !== publicUrl) {
          res.status(400).json({ error: 'Unable to update User profile' })
          return;
        }

        res.status(200).json('User Profile has been updated Successfully');
        return;
      })
      .end(req.file.buffer);
    
  };

  exports.deletePhoto = (req, res, next) => {
    const fileId = getIdFromURl(req.body.fileName);
    const blob = bucket.file(fileId);
    
    const checkFileExist = async () => {
        const ifExist = await blob.exists();
        if(!ifExist[0]) {
            throw new Error('Given File do not exist');
        }
        await blob.delete();
        return res.send('File Successfully Deleted');
    }

    checkFileExist().catch(err => {
        res.json({ error: 'File Do not exist'});
        return;
    })
  }
  