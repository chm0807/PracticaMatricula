const mongoose = require("mongoose");
const student_schema = mongoose.Schema({
    nombre_estudiante: { type: String, require: true },
    universiedad: { type: String, require: true },
    codigo_estudiante: { type: String, require: true, unique:true },
    matricula: { type: String, require: true, unique:true },
    materia: { 
        type: Object, 
        require: true,
        nombre_materia: { type: String, require: true},
        cantidad_creditos: { type: Number, require: true },
        valor_creditos: {type: parseFloat, require: true },
    },
});

module.exports = mongoose.model("Matricula", student_schema);
