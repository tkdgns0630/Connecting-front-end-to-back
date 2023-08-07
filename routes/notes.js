const note = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const util = require("util");
const path = require("path");

console.log(__dirname);

const readFromFile = util.promisify(fs.readFile);
// GET Route for retrieving all the notes
note.get("/", (req, res) => {
  readFromFile(path.join(__dirname, "../Develop/db/db.json")).then((data) =>
    res.json(JSON.parse(data))
  );
});

// posting post api call
note.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const activeNote = {
      title,
      text,
      id: uuidv4(),
    };
    fs.readFile(
      path.join(__dirname, "../Develop/db/db.json"),
      "utf8",
      (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedReviews = JSON.parse(data);
          // Add a new review
          parsedReviews.push(activeNote);
          // Write updated reviews back to the file
          fs.writeFile(
            path.join(__dirname, "../Develop/db/db.json"),
            JSON.stringify(parsedReviews, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info("Successfully updated reviews!")
          );
          res.redirect("/");
        }
      }
    );
  }
});

module.exports = note;
