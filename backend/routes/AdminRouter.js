const express = require("express");
const router = express.Router();
const {
  TotalRevenue,
  Subscriptions,
  getAllUsers,
  resentHotels,
  allSubscriptions,
} = require("../controllers/adminControllers");

router.get("/TotalRevenue", TotalRevenue);
router.get("/Subscriptions", Subscriptions);
router.get("/allSubscriptions", allSubscriptions);
router.get("/getAllUsers", getAllUsers);
router.get("/resentHotels", resentHotels);

module.exports = router;
