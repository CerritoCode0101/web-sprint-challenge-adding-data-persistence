// build your `/api/resources` router here
const express = require("express");

const Resource = require("./model");

const router = express.Router();

router.get("/resources", (req, res) => {
  Resource.getResources()
    .then((reso) => {
      res.status(200).json(reso);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id/resources", (req, res) => {
  Resource.getProjectResources(req.params.id)
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/resources", (req, res) => {
  Resource.addResource(req.body)
    .then((newProj) => {
      res.status(201).json({ message: "Resource Created", Post: newProj });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
