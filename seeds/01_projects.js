exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Build a bike",
      description: "Build a bike from scratch",
      completed: false,
    },
    {
      name: "Make an Invention",
      description: "Build a cool useful new machine",
      completed: false,
    },
    {
      name: "Learn a language",
      description: "Learn a new language to better communicate",
      completed: false,
    },
  ]);
};
