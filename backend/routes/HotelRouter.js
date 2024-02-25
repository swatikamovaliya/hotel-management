const express = require("express");
const router = express.Router();
const { hotels, getHotelById, bookHotel } = require("../controllers/hotelControllers");

router.get("/", hotels);
router.get("/:id", getHotelById);
router.post("/:id/book", bookHotel);

module.exports = router;
