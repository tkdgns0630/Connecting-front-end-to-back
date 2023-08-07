const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use("/api", api);

app.use(express.static("./Develop/public"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/assets/js/index.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
