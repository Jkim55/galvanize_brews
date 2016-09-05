exports.up = function(knex, Promise) {
  return knex.schema.createTable('breweries', function (table){
    table.increments();
    table.string('name');
    table.string('city');
    table.string('state');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('breweries')
};
