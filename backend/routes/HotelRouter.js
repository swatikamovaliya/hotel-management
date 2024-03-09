const express = require("express");
const router = express.Router();
const {
  hotels,
  getHotelById,
  bookHotel,
  myrooms,
  createHotels,
} = require("../controllers/hotelControllers");

router.get("/", hotels);
router.get("/create", createHotels);
router.get("/:id", getHotelById);
router.post("/:id/book", bookHotel);
router.post("/myrooms", myrooms);

module.exports = router;
