const BookHotel = require("../models/HotelBooks");
const clerkClient = require("@clerk/clerk-sdk-node");

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
  getAllUsers: async (req, res) => {
    let success = false;
    try {
      const data = await clerkClient.users.getUserList();
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
  resentHotels: async (req, res) => {
    let success = false;
    try {
      const data = await BookHotel.find({}).sort({ createdAt: -1 }).limit(10);
      success = true;
      res.json({ success, data });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  },
};
