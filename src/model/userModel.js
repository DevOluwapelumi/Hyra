import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: { type: String, required: [true, "Password is required"] },
});

let saltRound = 10;

userSchema.pre("save", async function (next) {
  try {
    const hash = await bcryptjs.hash(this.password, saltRound);
    this.password = hash;
    console.log(this.password);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
