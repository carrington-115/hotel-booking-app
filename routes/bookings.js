const express = require("express");
const {
  getIndexController,
  getListingsController,
  getBookDetail,
  getBooking,
} = require("../controllers/booking");
const Router = express.Router();

Router.get("/", getIndexController);
Router.get("/listings", getListingsController);
Router.get("/listings/:listingId", getBookDetail);
Router.get("/book-now", getBooking);

module.exports = Router;
