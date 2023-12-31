const express = require("express");
const ejs = require("ejs");
const https = require("https");
const axios = require("axios");
const fs = require("fs");
const bodyParser = require("body-parser");
const database = require("./database")

require('dotenv').config()
const app = express();

database.connect(process.env.DATABASE)
app.set("views", __dirname + "/public");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index.routes')
const notfound = require("./routes/404.routes")
const rshorter = require('./routes/rshorter.routes')
const sebelum = require("./routes/sebelum.routes")

app.use("/", index);
app.use("/rs", rshorter);
app.use("/sebelum", sebelum);
app.use("*", notfound);

app.listen(process.env.PORT, () => {
  console.log(`[SYSTEM] Website Started..`);
});
