const express = require("express");
const {
  getIndexController,
  getListingsController,
  getBookDetail,
  getBooking,
  getBookWithQueryDetails,
} = require("../controllers/booking");
const Router = express.Router();

// booking routes
Router.get("/", getIndexController);
Router.get("/listings", getListingsController);
Router.get("/listings/:listingId", getBookDetail);
Router.get("/book-now", getBooking);
Router.get("/book-now/:bookId", getBookWithQueryDetails);

// post routes
// Router.post('/listing')

module.exports = Router;
