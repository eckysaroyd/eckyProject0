const express = require("express");
const gravatar = require("gravatar");
//load user model
const User = require("../../models/User");
//we want to add bcrypt password
const bcrypt = require("bcryptjs");

const router = express.Router();

//route GET api/usres/test
//@desc test user root
// @access public
router.get("/test", (req, res) => res.json({ msg: "user works" }));

//route POST api/users/register
//@desc register user
// @access public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exist" });
    } else {
      const avator = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avator,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
