// build your `/api/projects` router here
const express = require("express");

const Project = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getProjects()
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", (req, res) => {
  Project.getProjectByID(req.params.id)
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  Project.addProject(req.body)
    .then((newProj) => {
      res.status(201).json({ message: "Project Created", Project: newProj });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
