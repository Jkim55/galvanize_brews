var express = require("express");
var router = express.Router();
var queries = require("../utilities/queries");

router.get("/", function(request, response, next) {
  queries.getBreweries()
  .then(function(data) {
    response.render("breweries", {breweries: data});
  })
});

router.get("/:id/beers", function(request, response, next) {
  queries.getBeersByBrewery(request.params.id)
  .then(function(beers) {
    response.render("beers", {beers: beers});
  })
    // Query for beers by brewery here
});

module.exports = router;
