import mongoose from "mongoose";
require("dotenv").config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((result) => {
      console.log("Database connected", result);
    })
    .catch((err) => {
      console.log(err);
    });
};
