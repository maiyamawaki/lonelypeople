const { getRounds } = require('bcrypt');
const express = require('express');
const router  = express.Router();
const { viewAboutMe } = require("../controller/about");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/about/about", viewAboutMe)



module.exports = router;
