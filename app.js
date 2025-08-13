require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const bookingRouter = require("./routes/bookings");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// template rendering for pug
app.set("view engine", "pug");
app.set("views", "views");

// bookings routers
app.use("/", bookingRouter);

app.use((req, res, next) => {
  res.send("404 error: Page not Found");
});

app.listen(process.env.PORT, () => {
  console.log("The app is running");
});
