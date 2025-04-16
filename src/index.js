const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const apiRouter = require("./routes");

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

db.authenticate()
  .then(() => {
    console.log("Connected to postgreSQL");
    return db.sync();
  })
  .then(() => {
    console.log("Database synced, starting server...");
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((e) => {
    console.error("Unable to connect to database", e);
  });
