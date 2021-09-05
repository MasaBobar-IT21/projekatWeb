const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const contactsRoutes = require('./routes/contact');

const app = express();

mongoose.connect("mongodb+srv://masa:WFv91rkbuyeYYQ1f@cluster0.vneqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=> {
  console.log('Connected to database');
}).catch(() => {
  console.log('Connection failed');
});

app.use((req, res, next) =>
{
  console.log('First middleware');
  next();
});

app.use((req, res, next) =>
{
  res.send('Hello from express');
});

app.use("/api/contact", contactsRoutes);

module.exports = app;
