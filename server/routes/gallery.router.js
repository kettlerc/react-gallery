const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT Route
router.put('/like/:id', (req, res) => {
    const sqlQuery =`
        UPDATE "gallery"
        SET "likes" = "likes"+1
        WHERE "id" = $1;
    `;
    const sqlParams = [
        req.params.id
    ];
    pool.query(sqlQuery, sqlParams)
        .then((results) => {
            console.log('PUT photo like');
            res.sendStatus(200);
        }).catch((error) => {
            console.log('PUT  error', error);
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery =`
        SELECT * FROM "gallery"
        ORDER BY "id" ASC
    `;
    pool.query(sqlQuery)
        .then((result) => {
            console.log('GET data from db', result);
            res.send(result.rows);
        }).catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;