// build your `/api/tasks` router here
const express = require("express");

const Task = require("./model");

const router = express.Router();

router.get("/tasks", (req, res) => {
  Task.getTasks()
    .then((reso) => {
      res.status(200).json(reso);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/tasks", (req, res) => {
  Task.addTask(req.body)
    .then((newTask) => {
      res.status(201).json({ message: "Task Created", Task: newTask });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id/tasks", (req, res) => {
  Task.getProjectTasks(req.params.id)
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
