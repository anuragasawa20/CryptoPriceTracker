const express = require('express');
const Trade = require('./models/Schema')
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
//const connectDB = require('./config/db');
const connectDB = require('./db');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

dotenv.config();

connectDB()

const PORT = 8080;

app.use(cors());

app.use(express.json());
// app.use('/api', TaskRoutes);
// app.use(errorController)

const API = "https://api.wazirx.com/api/v2/tickers";

async function getapi(url) {

    const response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    let keys = Object.keys(data);
    console.log("there is data[0]", keys);

    // for (let i = 0; i < keys.length; i++) {
    //     const NewTrade = new Trade({
    //         name: data[keys[i]].name,
    //         last: data[keys[i]].last,
    //         buy: data[keys[i]].buy,
    //         volume: data[keys[i]].volume,
    //         base_unit: data[keys[i]].base_unit,
    //         sell: data[keys[i]].sell
    //     });
    //     NewTrade.save();
    // }

}

getapi(API);

app.get('/', async (req, res) => {
    const result = await Trade.find({}).limit(10);
    res.send(result);
});




app.listen(PORT, () => { console.log(`Port is running on ${PORT}`) });  