const express = require("express");
const { getAdmin } = require("../controllers/admin");
const Router = express.Router();

// admin routes
Router.get("/", getAdmin);
// Router.get('/admin/add-listing', getAdmin)

module.exports = Router;
