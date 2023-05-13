const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://priyasingh:Priya@cluster0.kepu1bm.mongodb.net/subscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
module.exports = app.listen(port, () => console.log(`Server is working, App listening on port ${port}!`))
// app.listen(PORT); use app.listen(process.env.PORT);