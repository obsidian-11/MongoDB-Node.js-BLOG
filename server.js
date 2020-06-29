// =============== DEPENDENCIES ======================================
const bodyParser = require('body-parser');
const express = require("express");
const blogRoutes = require("./routes/blogRoutes");
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

// =============== VARS/FUNCTIONS ====================================
const app = express();

// connect to the db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('DATABASE CONNECTED');
    app.listen(process.env.PORT || 3000, () => {
      console.log("SERVER RUNNING -> PORT 3000");
    });
  })
  .catch(err => console.log(err));

app.set("view-engine", "ejs");

// =============== MIDDLEWARE / ROUTES ==============================
app.use(express.static(path.join(__dirname + '/./public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/blogs", blogRoutes);
