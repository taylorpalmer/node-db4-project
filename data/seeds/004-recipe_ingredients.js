exports.seed = async function (knex) {
  await knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, ingredient_quantity: "1 c" },
    { recipe_id: 1, ingredient_id: 2, ingredient_quantity: "2 slices" },
    { recipe_id: 1, ingredient_id: 3, ingredient_quantity: "1 lb" },
    { recipe_id: 2, ingredient_id: 4, ingredient_quantity: "desired amount" },
  ]);
};
