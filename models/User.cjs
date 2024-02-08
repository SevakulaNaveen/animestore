const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
