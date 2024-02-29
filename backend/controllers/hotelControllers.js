const Hotel = require("../models/Hotel");
const BookHotel = require("../models/HotelBooks");

module.exports = {
  hotels: async (req, res) => {
    let success = false;

    try {
      const data = await Hotel.find({});

      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
  getHotelById: async (req, res) => {
    let success = false;
    const { id } = req.params;

    try {
      const data = await Hotel.findById(id);

      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
  bookHotel: async (req, res) => {
    let success = false;
    const {
      hotelId,
      name,
      userId,
      checkInDate,
      checkOutDate,
      roomType,
      adults,
      children,
      totalAmount,
      phoneNumber,
      email,
    } = req.body;

    try {
      const data = await BookHotel.create({
        hotelId,
        name,
        userId,
        checkInDate,
        checkOutDate,
        roomType,
        adults,
        children,
        totalAmount,
        phoneNumber,
        email,
      });

      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
  myrooms: async (req, res) => {
    let success = false;
    const { userId } = req.body;

    try {
      const data = await BookHotel.find({ userId });

      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  }
};
