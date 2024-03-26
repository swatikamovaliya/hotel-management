const express = require("express");
const router = express.Router();
const {
  hotels,
  getHotelById,
  bookHotel,
  myrooms,
  createHotels,
  DeleteHotel
} = require("../controllers/hotelControllers");

router.get("/", hotels);
router.post("/create", createHotels);
router.get("/:id", getHotelById);
router.delete("/:id", DeleteHotel);
router.post("/:id/book", bookHotel);
router.post("/myrooms", myrooms);;

module.exports = router;
