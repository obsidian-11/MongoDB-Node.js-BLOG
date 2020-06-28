// =============== DEPENDENCIES ======================================
const express = require("express");
const blogRoutes = require("./routes/blogRoutes");
const path = require('path')
// ROUTES

// MODELS

// =============== VARS/FUNCTIONS ====================================
const app = express();
app.listen(process.env.PORT || 3000, () => {
  console.log("SERVER RUNNING -> PORT 3000");
});

app.set("view-engine", "ejs");
app.use(express.static(path.join(__dirname + '/./public')));

// =============== MIDDLEWARE ========================================
app.use("/blogs", blogRoutes);
