const Booking = require("../models/Bookings");

exports.getAdmin = (req, res, next) => {
  res.render("admin", {
    path: "/admin",
    pageTitle: "Admin: get all listings and add listings",
  });
};

exports.getAdminAddListing = (req, res, next) => {
  res.render("all-listing", {
    path: "/admin/add-listing",
    pageTitle: "Admin: Add listing here",
  });
};

// post actions

exports.postSubmitBooking = (req, res, next) => {
  const { startDate, endDate, guestNumber, stayPurpose } = req.body;
  const newBooking = new Booking({
    startDate: startDate,
    endDate: endDate,
    numberOfGuests: guestNumber,
    purpose: stayPurpose,
  });
  newBooking
    .save()
    .then((booking) => {
      res.redirect("/listings");
    })
    .catch((err) => {
      console.error(err);
    });
};
