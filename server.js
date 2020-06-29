// =============== DEPENDENCIES ======================================
const bodyParser = require("body-parser");
const express = require("express");
const blogRoutes = require("./routes/blogRoutes");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

// =============== VARS/FUNCTIONS ====================================
const app = express();

// connect to the db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
    const port = 3000; // ---CHANGE PORT HERE---
    app.listen(process.env.PORT || port, () => {
      console.log("SERVER RUNNING -> PORT " + port);
    });
  })
  .catch((err) => console.log(err));

app.set("view-engine", "ejs");

// =============== MIDDLEWARE / ROUTES ==============================
app.use(express.static(path.join(__dirname + "/./public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
