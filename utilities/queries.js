var knex = require('./knex')

function getBreweries (){
    return knex('breweries')
}

function getBrewery (id){
  return knex('breweries').where('id', id)
}

function getBeers (){
  return knex('beers')
  .join('breweries', 'breweries.name', 'beers.brewery')
  .select(
    'beers.name as beer_name',
    'breweries.name as brewery_name',
    'beers.abv'
  )
    // Get beers and brewery data
    // Alias the beer name to beer_name and the brewery name to brewery_name
}

function getBeersByBrewery (brewery_id){
  return knex('beers')
  .join('breweries', 'breweries.name', 'beers.brewery')
  .select(
    'beers.name as beer_name',
    'breweries.name as brewery_name', 'beers.abv').where('breweries.id', brewery_id)
    // Get beers and brewery data for a single brewery
    // Alias the beer name to beer_name and the brewery name to brewery_name
}

module.exports = {
  getBreweries: getBreweries,
  getBeers: getBeers,
  getBeersByBrewery: getBeersByBrewery
};
