const express = require("express");
const student_model = require("../models/student.model");
const student_routes_http = express.Router();

student_routes_http.post("/", (req, res) => {
    const new_student = student_model(req.body);
    new_student
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

student_routes_http.get("/", (req, res) => {
    student_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err }));
});

student_routes_http.get("/:studentId", (req, res) => {
    const { studentId } = req.params;
    student_model
        .findById({ _id: studentId })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

student_routes_http.put("/:studentId", (req, res) => {
    const {studentId} = req.params;
    const { nombre_estudiante, universidad, matricula, materia} = req.body;
    student_model
        .updateOne(
            {_id: studentId},
            {$set: { nombre_estudiante, universidad, matricula, materia}} 
        )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err }));
});

student_routes_http.delete("/:studentId", (req,res) => {
    const {studentId} = req.params;
    student_model
        .deleteOne({_id: studentId})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err }));
});

module.exports = student_routes_http; 