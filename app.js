require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const bookingRouter = require("./routes/bookings");
const adminRouter = require("./routes/admin");
const { connection } = require("./util/client");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// template rendering for pug
app.set("view engine", "pug");
app.set("views", "views");

// bookings routers
app.use("/", bookingRouter);
app.use("/admin", adminRouter);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "404: Page not found" });
});

mongoose
  .connect(connection)
  .then((data) => {
    console.log("The client is connected to mongodb");
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.error(error);
  });
