const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(`hellow people`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));
