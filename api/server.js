// build your server here and require it from index.js
const ProjectRouter = require("./project/router");
const TaskRouter = require("./task/router");
const ResourceRouter = require("./resource/router");
const express = require("express");
const server = express();
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api", TaskRouter);
server.use("/api", ResourceRouter);

module.exports = server;
