// build your `Resource` model here
const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

function getProjectResources(project_id) {
  return db("projects as p")
    .where("p.id", project_id)
    .select("p.id as project_id", "r.name as resouces")
    .innerJoin("projects_resources as p_r", "p.id", "p_r.project_id")
    .innerJoin("resources as r", "p_r.resource_id", "r.id");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  getProjectResources,
  addResource,
  getResources,
};
