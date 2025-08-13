exports.getIndexController = (req, res, next) => {
  res.render("index", {
    pageTitle: "Home: find all available hotel listings",
    path: "/",
  });
};
