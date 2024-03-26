const connectToMongo = require("./db");
const express = require("express");
const HotelRouter = require("./routes/HotelRouter");
const AdminRouter = require("./routes/AdminRouter");
const cors = require("cors");

// ** connect to mongoDB server
try {
  connectToMongo();
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 3005;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.use("/hotel", HotelRouter);
app.use("/admin", AdminRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to Hotel Booking API" });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = app;
