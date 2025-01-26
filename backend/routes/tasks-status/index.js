const express = require("express");
const { sql } = require("../../database");

const router = express.Router();

router.get("/", (request, response) => {
    try {
        const query = `
            SELECT 
                *
            FROM Estado_Tareas
        `;

        sql.query(query, (err, result) => {
            if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

            return response.status(200).json({ Status: "Success", tasksState: result.recordset })
        })
    } 
    catch (error) {
        return response.status(500).json({ Status: "Error", message: error.message })
        
    }
});

module.exports = router;