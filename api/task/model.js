// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks");
}

function getProjectTasks(project_id) {
  return db("projects as p")
    .where("p.id", project_id)
    .select(
      "p.id as project_id",
      "p.name as project_name",
      "p.description as project_description",
      "t.description as task_description",
      "t.notes as task_notes",
      "t.completed"
    )
    .innerJoin("tasks as t", "p.id", "t.project_id");
}

function addTask(task) {
  return db("tasks").insert(task);
}

module.exports = {
  getProjectTasks,
  addTask,
  getTasks,
};
