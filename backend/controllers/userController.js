const User = require("../models/userModel");
const { bucket } = require("../utils/uploadHelper");
const { getIdFromURl } = require('../utils/imageIdExtract');

//get user by id
exports.getUserById = async (req, res, next, userId) => {
  try {
    const user = await User.findById({ _id: userId });
    if (!user) {
      res.status(404).json({ error: "Invalid User Id" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Unknow Error" });
  }
};

exports.removeUserById = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.user._id });
    res.status(200).json("User Has been successfully deleted");
    return;
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "User cannot be deleted" });
    return;
  }
};

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
    "images/" + req.file.originalname.replace(/ /g, "_")
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
      res.status(200).json({ profileURL: publicUrl });
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

    const fileId = getIdFromURl(req.body.fileLocation);
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
        res.status(200).json({ updatedUrl: publicUrl });
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
  