exports.seed = function (knex) {
  return knex("table_name").insert([
    { step_number: 1, instructions: "heat pan on medium", recipe_id: 1 },
    {
      step_number: 2,
      instructions: "place cheese between bread",
      recipe_id: 1,
    },
    { step_number: 3, instructions: "butter pan", recipe_id: 1 },
    { step_number: 4, instructions: "insert sandwich into pan", recipe_id: 1 },
    { step_number: 5, instructions: "flip when golden", recipe_id: 1 },
    { step_number: 6, instructions: "serve", recipe_id: 1 },
    { step_number: 1, instructions: "rowValue1", recipe_id: 2 },
    { step_number: 2, instructions: "rowValue2", recipe_id: 2 },
    { step_number: 3, instructions: "rowValue3", recipe_id: 2 },
    { step_number: 4, instructions: "rowValue1", recipe_id: 2 },
    { step_number: 5, instructions: "rowValue2", recipe_id: 2 },
    { step_number: 6, instructions: "rowValue3", recipe_id: 2 },
  ]);
};
