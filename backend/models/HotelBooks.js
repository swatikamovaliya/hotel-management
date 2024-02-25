const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingHotelSchema = new Schema(
  {
    HotelId: String,
    visiter: String,
    checkIn: String,
    checkOut: String,
    roomType: String,
    roomCount: Number,
    adultCount: Number,
    childrenCount: Number,
    totalAmount: Number,
    phone: Number,
    email: String,
  },
  { timestamps: true }
);

const BookHotel = mongoose.model("bookhotel", BookingHotelSchema);
BookHotel.createIndexes();

module.exports = BookHotel;
