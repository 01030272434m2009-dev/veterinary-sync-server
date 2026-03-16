const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {

    const { entity, action, data, records } = req.body;

    console.log("SYNC:", entity, action);

    if (action === "bulk") {

        records.forEach(r => {

            const keys = Object.keys(r);
            const values = Object.values(r);

            const placeholders = keys.map(() => "?").join(",");

            const sql = `
            INSERT INTO ${entity}
            (${keys.join(",")})
            VALUES (${placeholders})
            `;

            db.run(sql, values);

        });

        return res.json({ status: "ok" });
    }

    if (action === "create") {

        const keys = Object.keys(data);
        const values = Object.values(data);

        const placeholders = keys.map(() => "?").join(",");

        const sql = `
        INSERT INTO ${entity}
        (${keys.join(",")})
        VALUES (${placeholders})
        `;

        db.run(sql, values);

        return res.json({ status: "created" });
    }

    if (action === "delete") {

        if (data.Code) {

            db.run(`DELETE FROM ${entity} WHERE Code=?`, [data.Code]);
        }

        if (data.Id) {

            db.run(`DELETE FROM ${entity} WHERE Id=?`, [data.Id]);
        }

        return res.json({ status: "deleted" });
    }

    res.json({ status: "done" });

});

module.exports = router;
