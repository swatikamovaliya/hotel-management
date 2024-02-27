const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingHotelSchema = new Schema(
  {
    hotelId: String,
    userId: String,
    name: String,
    checkInDate: String,
    checkOutDate: String,
    roomType: String,
    adults: Number,
    children: Number,
    totalAmount: Number,
    phoneNumber: Number,
    email: String,
  },
  { timestamps: true }
);

const BookHotel = mongoose.model("bookhotel", BookingHotelSchema);
BookHotel.createIndexes();

module.exports = BookHotel;
