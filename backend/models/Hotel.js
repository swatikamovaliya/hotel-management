const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema(
  {
    name: String,
    rating: Number,
    charges: Number,
    img: String,
    description: String,
    city: String,
    country: String,
    phone: String,
  },
  { timestamps: true }
);

const Hotel = mongoose.model("hotel", HotelSchema);
Hotel.createIndexes();

module.exports = Hotel;
