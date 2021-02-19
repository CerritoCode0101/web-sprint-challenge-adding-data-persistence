exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      project_id: 1,
      description: "Buy a cheap bike",
      notes: "Check local listings using sites like craigslist",
      completed: false,
    },
    {
      project_id: 1,
      description: "Buy parts",
      notes: "Check local scrapyards for cheap aftermarket parts",
      completed: false,
    },
    {
      project_id: 1,
      description: "Buy tools",
      notes: "Check local hardware stores",
      completed: false,
    },
    {
      project_id: 2,
      description: "Buy a build book",
      notes: "Check local stores for book on machine building",
      completed: false,
    },
    {
      project_id: 2,
      description: "Learn how to build machines",
      notes: "You can learn on sites like YouTube",
      completed: false,
    },
    {
      project_id: 2,
      description: "Build a few machine learning applications",
      notes: "Outsource for help on sites like Reddit or YouTube",
      completed: false,
    },
    {
      project_id: 3,
      description: "Save up some money",
      notes: "People usually save about $1,000 before looking into parts",
      completed: false,
    },
    {
      project_id: 3,
      description: "Do some research for machine parts",
      notes:
        "Figure out what you want to use your machine for, and revolve parts around use",
      completed: false,
    },
    {
      project_id: 3,
      description: "Order parts and put it together",
      notes: "Learn how to create an invention using site like YouTube",
      completed: false,
    },
  ]);
};
