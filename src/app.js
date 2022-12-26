require('dotenv').config();
const express = require('express');
const cors = require('cors');
const api = require('./routes/api');



const app = express();


app.use(cors());
app.use(express.json());


app.use('/', (req, res) => {
    res.send('news-api');
});
app.use('/api/v1', api);


module.exports = app;