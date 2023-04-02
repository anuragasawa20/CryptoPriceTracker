const mongoose = require("mongoose");

// name, last, buy, Sell, volume, base_unit of all

const Schema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
})


const Trade = mongoose.model('Trade', Schema);

module.exports = Trade;