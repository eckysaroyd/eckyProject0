const express = require("express");

const router = express.Router();

//route GET api/usres/test
//@desc test user root
// @access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

module.exports = router;
