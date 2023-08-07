// import express
const express = require("express");
// import note router
const noteRouter = require("./notes");
// instantaniate app  = express
const app = express();
// allow /notes route to be using note router
app.use("/notes", noteRouter);
// export
module.exports = app;
