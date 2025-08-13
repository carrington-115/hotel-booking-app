exports.getIndexController = (req, res, next) => {
  res.render("index", {
    pageTitle: "Home: find all available hotel listings",
    path: "/",
  });
};

exports.getListingsController = (req, res, next) => {
  res.render("listings", {
    pageTitle: "Listings: find your next stay",
    path: "/listings",
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
