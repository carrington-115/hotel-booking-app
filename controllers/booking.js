const Listing = require("../models/Listing");

exports.getIndexController = (req, res, next) => {
  Listing.find()
    .limit(4)
    .then((listings) => {
      res.render("index", {
        pageTitle: "Home: find all available hotel listings",
        path: "/",
        listings: listings,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getListingsController = (req, res, next) => {
  Listing.find()
    .then((listings) => {
      res.render("listings", {
        pageTitle: "Listings: find your next stay",
        path: "/listings",
        listings: listings,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getBookDetail = (req, res, next) => {
  const { listingId } = req.params;
  res.render("details", {
    path: `/listings/${listingId}`,
    pageTitle: "Some random thing", // to be updatec
  });
};

exports.getBooking = (req, res, next) => {
  res.render("booking", {
    path: "/book-now",
    pageTitle: "",
  });
};

// all post controllers
exports.postAddListToDb = (req, res, next) => {
  const {
    hotel,
    image,
    hotelLocation,
    mapLocation,
    resources,
    roomTypes,
    startPrice,
    endPrice,
    hotelDescription,
  } = req.body;
  const newListing = new Listing({
    name: hotel,
    image,
    hotelLocation,
    mapLocation,
    resources,
    roomTypes,
    startPrice,
    endPrice,
    hotelDescription,
  });

  newListing
    .save()
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => console.error(err));
};
