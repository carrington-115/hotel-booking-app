const express = require("express");
const {
  getIndexController,
  getListingsController,
} = require("../controllers/booking");
const Router = express.Router();

Router.get("/", getIndexController);
Router.get("/listings", getListingsController);

module.exports = Router;
