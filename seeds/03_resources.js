exports.seed = async function (knex) {
  await knex("resources").insert([
    {
      name: "Bike",
      description: "Buy a used bike, your wallet will thank you",
    },
    {
      name: "Scrapyard",
      description:
        "Having access to a local scrapyard will save you a lot of money",
    },
    {
      name: "Drill",
      description:
        "You'll be doing a lot of drilling if you plan on building a street bike",
    },
    { name: "New Invention", description: "You'll need a PC to learn" },
    {
      name: "YouTube account",
      description:
        "You'll want a YouTube account to save helpful tutorials in a private playlist",
    },
    {
      name: "Reddit account",
      description:
        "You'll want a Reddit account to connect with professionals who are able to help answer your questions",
    },
    { name: "Job", description: "You'll need a job to start saving money" },
    {
      name: "Newegg account",
      description:
        "Newegg is a site that many people go to when ordering machine parts or PCs",
    },
  ]);
};
