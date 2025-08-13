const express = require("express");
const { getIndexController } = require("../controllers/booking");
const Router = express.Router();

Router.get("/", getIndexController);

module.exports = Router;
