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
