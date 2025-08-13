const express = require("express");
const { getAdmin, getAdminAddListing } = require("../controllers/admin");
const { postAddListToDb } = require("../controllers/booking");
const Router = express.Router();

// admin routes
Router.get("/", getAdmin);
Router.get("/add-listing", getAdminAddListing);

// post routes
Router.post("/add-listing", postAddListToDb);

module.exports = Router;
