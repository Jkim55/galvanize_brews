
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('beers').insert({
          brewery: 'Comrade',
          name: 'Yellow Fever',
          abv: 5.0
        }),
        knex('beers').insert({
          brewery: 'Comrade',
          name: 'Redcon',
          abv: 5.7
        }),
        knex('beers').insert({
          brewery: 'Ska',
          name: 'True Blonde Ale',
          abv: 5.0
        }),
        knex('beers').insert({
          brewery: 'Ska',
          name: 'Modus Hoperandi IPA',
          abv: 6.8
        })
      ]);
    });
};
