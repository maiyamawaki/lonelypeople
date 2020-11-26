const express = require('express');
const router  = express.Router();
const { viewDetail1 } = require("../controller/detail");

/*detail1*/
router.get("/detail/detail1", viewDetail1)

module.exports = router;