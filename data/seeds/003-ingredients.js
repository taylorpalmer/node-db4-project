exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { name: "butter" },
    { name: "bread" },
    { name: "cheese" },
    { name: "pasta" },
  ]);
};
