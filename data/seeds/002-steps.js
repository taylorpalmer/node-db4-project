exports.seed = async function (knex) {
  await knex("steps").insert([
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
    { step_number: 1, instructions: "fill pot with water", recipe_id: 2 },
    { step_number: 2, instructions: "bring to a boil on high", recipe_id: 2 },
    { step_number: 3, instructions: "insert pasta", recipe_id: 2 },
    { step_number: 4, instructions: "lower heat to medium high", recipe_id: 2 },
    { step_number: 5, instructions: "cook until tender", recipe_id: 2 },
    { step_number: 6, instructions: "drain", recipe_id: 2 },
  ]);
};
