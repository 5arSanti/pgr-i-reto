const express = require("express");


const tasksRouter = require("./tasks");

const tasksStatusRouter = require("./tasks-status");

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api/v1", router);


    router.use("/tasks", tasksRouter);

    router.use("/tasks-status", tasksStatusRouter);
}

module.exports = { routerApi };
