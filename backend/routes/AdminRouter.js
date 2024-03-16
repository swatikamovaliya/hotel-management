const express = require("express");
const router = express.Router();
const { TotalRevenue, Subscriptions, getAllUsers, resentHotels } = require("../controllers/adminControllers");

router.get("/TotalRevenue", TotalRevenue);
router.get("/Subscriptions", Subscriptions);
router.get("/getAllUsers", getAllUsers);
router.get("/resentHotels", resentHotels);

module.exports = router;
