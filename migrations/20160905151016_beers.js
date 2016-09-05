
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', function (table){
    table.increments();
    table.string('brewery');
    table.string('name');
    table.decimal('abv', 2, 1);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beers')
};
