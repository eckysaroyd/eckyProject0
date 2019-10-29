const express = require("express");

const router = express.Router();

//route GET api/profile/test
//@desc test user root
// @access public
router.get("/test", (req, res) => res.json({ msg: "user profile" }));

module.exports = router;
