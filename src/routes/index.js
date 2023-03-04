const express = require("express");
const students_routes_access = require("./student_routes");
const routes = express.Router();

const app_routes_system = (app) => {
    app.use("/api/v1", routes);
    routes.use("/matricula", students_routes_access);
};

module.exports = app_routes_system;