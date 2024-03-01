const connectToMongo = require("./db");
const cors = require("cors");
const express = require("express");
const Hotel = require("./models/Hotel");
const HotelRouter = require("./routes/HotelRouter");
const AdminRouter = require("./routes/AdminRouter");

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
    origin: ["http://localhost:5000"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/hotel", HotelRouter);
app.use("/admin", AdminRouter);

app.get("/", () => {
  const fetch = async () => {
    const hotel = await Hotel.find({});
    console.log(hotel);
  };
  fetch();
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = app;
