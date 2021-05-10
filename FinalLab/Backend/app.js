const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersRouter = require("./routes/users");

const db = require("./db");

const app = express();

const databaseUrl = "mongodb://localhost:27017";

db.connect(databaseUrl, function (err) {
  if (err) throw "Fallo en la conexión con la BD";

  app["db"] = db.get();
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", usersRouter);

module.exports = app;
