var express = require("express");
var router = express.Router();
var queries = require("../utilities/queries");

router.get("/", function(request, response, next) {
  queries.getBeers()
  .then(function(beers) {
    response.render("beers", {beers: beers});
  })
});

module.exports = router;
