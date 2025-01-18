const express = require("express");
const { sql } = require("../../database");

const router = express.Router();

router.get("/", (request, response) => {
    try {
        const query = `
            SELECT 
                t.ID_Tarea AS id,
                t.Titulo,
                t.Descripcion,
                et.ID_Estado_Tarea,
                et.Estado,
                t.Fecha_Creacion

            FROM Tareas t
            JOIN Estado_Tareas et ON t.ID_Estado_Tarea = et.ID_Estado_Tarea

        `;

        sql.query(query, (err, result) => {
            if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

            return response.status(200).json({ Status: "Success", tasks: result.recordset })
        }) 
    } 
    catch (error) {
        return response.status(500).json({ Status: "Error", message: error.message })
    }
});

router.post("/", (request, response) => {
    try {
        const { Titulo, Descripcion } = request.body;

        if (!Titulo || !Descripcion) { 
            return response.status(400).json({ Status: "Error", message: "Faltan datos" }) 
        }

        if (Titulo === "") { 
            return response.status(400).json({ Status: "Error", message: "El titulo no puede estar vacio" }) 
        }

        const query = `
            INSERT INTO Tareas (
                Titulo,
                Descripcion,
                ID_Estado_Tarea
            ) 
            VALUES (
                '${Titulo}', 
                '${Descripcion}', 
                1
            )
        `;

        sql.query(query, (err, result) => {
            if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

            return response.status(200).json({ Status: "Success", message: "Tarea creada correctamente" })
        }) 
    } 
    catch (error) {
        console.log(error)
        return response.status(500).json({ Status: "Error", message: error.message })
    }
})

router.delete("/:id", (request, response) => {
    try {
        const { id } = request.params;

        if (!id) { 
            return response.status(400).json({ Status: "Error", message: "El ID de la tarea no fue proporcionado." }) 
        }

        const query = `
            DELETE FROM Tareas WHERE ID_Tarea = ${id}
        `;

        sql.query(query, (err, result) => {
            if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

            return response.status(200).json({ Status: "Success", message: "Tarea eliminada correctamente" })
        }) 
    } 
    catch (error) {
        return response.status(500).json({ Status: "Error", message: error.message })
    }
})

router.patch("/", (request, response) => {
    try {
        const { id, ID_Estado_Tarea } = request.body;

        if (!id) { 
            return response.status(400).json({ Status: "Error", message: "El ID de la tarea no fue proporcionado." }) 
        }

        if (!ID_Estado_Tarea) {
            return response.status(400).json({ Status: "Error", message: "El ID del estado de la tarea no fue proporcionado." }) 
        }

        const query = `
            UPDATE Tareas
            SET 
                ID_Estado_Tarea = ${ID_Estado_Tarea}
            WHERE ID_Tarea = ${id}
        `;

        sql.query(query, (err, result) => {
            if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

            return response.status(200).json({ Status: "Success", message: "Tarea actualizada correctamente" })
        }) 
    } 
    catch (error) {
        return response.status(500).json({ Status: "Error", message: error.message })
    }
})

module.exports = router;

