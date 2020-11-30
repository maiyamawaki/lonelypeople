const express = require('express');
const router  = express.Router();
const { viewAll } = require("../controller/allview")
const { ensureLogin } = require("../middleware/index")

router.get("/private/all", ensureLogin, viewAll)

module.exports = router;