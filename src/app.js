require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const api = require('./routes/api');



const app = express();

// middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('news-api');
});
app.use('/api/v1', api);


app.use('*', (req, res) => {
    res.status(404).json({
        status: 'failed',
        message: 'Not found'
    });
});

module.exports = app;