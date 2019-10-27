const express = require("express");
const mongoose = require("mongoose");

const app = express();

//db config
const db = require(`./config/keys`).mongoURI;

//DB CONNECTION
mongoose
  .connect(db)
  .then(() => console.log(`DB connected`))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send(`hellow World I'am Here`));

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`server run on port ${port}`));
