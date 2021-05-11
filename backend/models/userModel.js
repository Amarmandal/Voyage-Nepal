const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuid } = require("uuid");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 3,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      minLength: 1,
      unique: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    profileImgURL: {
      type: String,
      trim: true,
    },
    hashPassword: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

userSchema.virtual('password')
  .set(function(userPass) {
    this.salt = uuid();
    this._password = userPass;
    this.hashPassword = this.getHashPassword(userPass);
  })
  .get(function() {
      return this._password;
  })

userSchema.method({
    authenticate: function (plainPassword) {
        return (this.getHashPassword(plainPassword) === this.hashPassword);
    },

  getHashPassword: function (plainPassword) {
    if (plainPassword === "") return "";
    try {
      const hash = crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
      return hash;
    } catch (error) {
      console.log(error);
      return "";
    }
  },
});

//User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
