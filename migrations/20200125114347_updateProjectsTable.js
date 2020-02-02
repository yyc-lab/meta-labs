exports.up = function (knex, Promise) {
  return knex('projects')
  .whereIn("name", ['metalabs', 'Health companion', 'Ultron testing', 'Dream game'])
  .del()
  .then(() => {
    return knex.schema.table("projects", function (table) {
      table.string('repos')
      table.string('time_line')
      table.string('tech_stack')
      table.string('documents')
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table("projects", function(table){
    table.dropColumn('repos')
    table.dropColumn('time_line')
    table.dropColumn('tech_stack')
    table.dropColumn('documents')
    table.dropColumn("created_at")
  })
};
