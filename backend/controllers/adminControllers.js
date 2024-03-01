const BookHotel = require("../models/HotelBooks");

module.exports = {
  TotalRevenue: async (req, res) => {
    let success = false;
    try {
      const data = await BookHotel.find({});
      let totalRevenue = 0;
      data.forEach((item) => {
        totalRevenue += item.totalAmount;
      });
      success = true;
      res.json({ success, totalRevenue });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
  Subscriptions: async (req, res) => {
    let success = false;
    try {
      const data = await BookHotel.find({});

      let subscriptions = data.length;

      success = true;
      res.json({ success, subscriptions });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
};
