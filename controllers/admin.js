exports.getAdmin = (req, res, next) => {
  res.render("admin", {
    path: "/admin",
    pageTitle: "Admin: get all listings and add listings",
  });
};
