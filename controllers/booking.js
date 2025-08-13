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
