require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbURI = process.env.MONGODB_URI;

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
