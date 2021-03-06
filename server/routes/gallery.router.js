const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET Route
router.get('/', (req, res) => {
    const sqlQuery =`
        SELECT * FROM "gallery"
        ORDER BY "id" ASC
    `;
    pool.query(sqlQuery)
        .then((result) => {
            console.log('GETting data from db');
            res.send(result.rows);
        }).catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        });
}); // END GET Route


// POST Route
router.post('/', (req, res) => {
    const sqlQuery =`
        INSERT INTO "gallery"
        ("path", "description", "likes")
        VALUES ($1, $2, $3)
    `;
    const sqlParams = [
        req.body.path,
        req.body.description,
        req.body.likes
    ];
    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('POST photo working', req.body);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500);
        });
}); // END POST Route


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


// DELETE Route
router.delete('/:id', (req, res) => {
    const sqlQuery =`
        DELETE FROM "gallery"
        WHERE "id" = $1
    `;
    const sqlParams = [
        req.params.id
    ];
    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('Photo DELTEd');
            res.sendStatus(200);
        }).catch((error) => {
            console.log('DELETE error', error);
            res.sendStatus(500);
        });
}); // END DELETE Route

module.exports = router;