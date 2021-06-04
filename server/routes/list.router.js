const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...



// GET⬇


// POST⬇
router.post('/', (req, res) => {
    const newItem = req.body
    const sqlText = `INSERT INTO shopping_cart (name, quantity, unit) VALUES ($1, $2, $3);`;

    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then ((result ) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${error}`);
        res.sendStatus(500);
    });
})



// PUT⬇



// DELETE⬇

module.exports = router;