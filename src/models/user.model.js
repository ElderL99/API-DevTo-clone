const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    profilePic: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: RegExp(".*@.*..*"),
      unique: true,
    },
    password: {
      type: String,
      requried: true,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
