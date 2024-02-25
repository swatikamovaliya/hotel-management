const mongoose = require("mongoose");
require("dotenv").config();

// ** mongoBD URI 
const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI, () => {
      console.log("Connected to MongoDB ☘️ ");
    });
  } catch (error) {
    console.log("connect to MongoDB error: " + error)
  }
};

module.exports = connectToMongo;
