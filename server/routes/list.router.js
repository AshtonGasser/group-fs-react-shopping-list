const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...



// GET⬇
router.get('/', (req, res) => {

    // queryText grabs our table data and organizes it aphabetically by the "name" vals
    let queryText = `SELECT * FROM shopping_carts ORDER BY "name" ASC;`;
    // need to tell the database what data we want to retrieve
    pool.query(queryText)
    .then( result => {
        // result is what we will get from the database
        console.log('The result from the get route is ', result);
        // send to client
        res.send(result.rows);

        // catch errors
    }).catch ( err => {
        console.log('There was an error in the GET route', err);
        res.sendStatus(500);
    })
})

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