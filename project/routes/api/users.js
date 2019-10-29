const express = require("express");
const User = require("../../model/User");

const router = express.Router();

//route GET api/usres/test
//@desc test user root
// @access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

//route POST api/users/register
//@desc register user root
// @access public

router.post("register", (req, res) => {
  User;
});

module.exports = router;
