exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "Grilled Cheese" },
    { id: 2, name: "Pasta" },
  ]);
};
