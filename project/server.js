const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const post = require("./routes/api/post.js");
const profile = require("./routes/api/profile.js");
const users = require("./routes/api/users.js");

const app = express();

//db config
const db = require(`./config/keys`).mongoURI;

//DB CONNECTION
mongoose
  .connect(db)
  .then(() => console.log(`DB connected`))
  .catch(err => console.log(err));

//uses routes
app.use("/api/post", post);
app.use("/api/profile", profile);
app.use("/api/users", users);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`server run on port ${port}`));
