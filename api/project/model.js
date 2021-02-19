// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects as p").select(
    "p.id as project_id",
    "p.name as project_name",
    "p.description",
    "p.completed"
  );
}

function getProjectByID(project_id) {
  return db("projects as p")
    .select(
      "p.id as project_id",
      "p.name as project_name",
      "p.description",
      "p.completed"
    )
    .where("p.id", project_id);
}

function addProject(project) {
  return db("projects").insert(project);
}

module.exports = {
  getProjects,
  getProjectByID,
  addProject,
};
