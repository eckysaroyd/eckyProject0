const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hellow Jacque one i like you"));

const port = process.env.PORT || 2000;

app.listen(port, () => console.log("server run on port ${port}"));
