// initiating express path and modules

const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

//instantaniation of express
const app = express();

// allows files to be read in json format
app.use(express.json());

// instantaniate /api route with api module.
app.use("/api", api);
// publicly allow express to access folder public
app.use(express.static("./Develop/public"));
// set /note route to html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
);
// set all other paths to be directed index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/assets/js/index.html"))
);
// start server.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
