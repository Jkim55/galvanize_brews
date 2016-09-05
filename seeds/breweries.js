
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('breweries').insert({
          name: 'Comrade',
          city: 'Denver',
          state: 'CO'
        }),
        knex('breweries').insert({
          name: 'Ska',
          city: 'Durango',
          state: 'CO'
        })
      ]);
    });
};
