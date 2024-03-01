const express = require("express");
const router = express.Router();
const { TotalRevenue, Subscriptions } = require("../controllers/adminControllers");

router.get("/TotalRevenue", TotalRevenue);
router.get("/Subscriptions", Subscriptions);

module.exports = router;
