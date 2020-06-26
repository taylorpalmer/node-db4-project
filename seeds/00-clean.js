exports.seed = async function (knex) {
  await knex("recipe-book").truncate();
};
