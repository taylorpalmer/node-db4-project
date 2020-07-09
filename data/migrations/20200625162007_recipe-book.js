exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });

  await knex.schema.createTable("steps", (table) => {
    table.increments("id");
    table.int("step_number").notNull();
    table.text("instructions").notNull();
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });

  await knex.schema.createTable("recipe_ingredients", (table) => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.text("ingredient_quantity").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("recipes");
};
