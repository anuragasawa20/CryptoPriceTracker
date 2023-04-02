const express = require('express');
const mongoose = require('mongoose');
const Trade = require('./models/Schema')


const router = express.Router();


router.get('/:name', (req, res) => {
    Trade.find({ name: req.name }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});
router.get('/ETH-INR', ETHcontroller);
router.get('/ETH-INR', BTCcontroller);

module.exports = router;