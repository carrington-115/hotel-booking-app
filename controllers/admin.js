const Booking = require("../models/Bookings");
const Listing = require("../models/Listing");

exports.getAdmin = (req, res, next) => {
  Booking.find()
    .then((bookings) => {
      // const updatedBookings = bookings.map((booking) => {
      //   Listing.findOne({ _id: booking.hotelId }).then((data) => {
      //     return {
      //       _id: booking._id,
      //       hotelName: data.name,
      //       guestNumber: booking.numberOfGuests,
      //       duration: `${booking.startDate} - ${booking.endDate}`,
      //     };
      //   });
      // });

      // console.log(updatedBookings);
      res.render("admin", {
        path: "/admin",
        pageTitle: "Admin: get all listings and add listings",
        bookings: bookings,
      });
    })
    .catch((err) => {
      console.error(err);
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
  const { startDate, endDate, guestNumber, stayPurpose, hotelId } = req.body;
  Listing.findOne({ _id: hotelId })
    .then((listing) => {
      const newBooking = new Booking({
        hotelId: listing._id,
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
    })
    .catch((err) => {
      console.error(err);
    });
};
