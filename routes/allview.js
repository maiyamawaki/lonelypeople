const express = require('express');
const router  = express.Router();
const { viewAll } = require("../controller/allview")

router.get("/private/all", viewAll)

module.exports = router;