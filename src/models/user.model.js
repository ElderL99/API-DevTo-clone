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
      match: RegExp(
        "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{8,15}/"
      ),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
