const express = require("express");
const { getAdmin, getAdminAddListing } = require("../controllers/admin");
const Router = express.Router();

// admin routes
Router.get("/", getAdmin);
Router.get("/add-listing", getAdminAddListing);

module.exports = Router;
