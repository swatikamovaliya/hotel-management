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
      HotelId,
      visiter,
      checkIn,
      checkOut,
      roomType,
      roomCount,
      adultCount,
      childrenCount,
      totalAmount,
      phone,
      email,
    } = req.body;

    try {
      const data = await BookHotel.create({
        HotelId,
        visiter,
        checkIn,
        checkOut,
        roomType,
        roomCount,
        adultCount,
        childrenCount,
        totalAmount,
        phone,
        email,
      });

      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
};
