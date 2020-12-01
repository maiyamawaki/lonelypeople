const express = require('express');
const router  = express.Router();
const { viewAll,
				contactView,
				contactProcess } = require("../controller/allview")
const { ensureLogin } = require("../middleware/index")

router.get("/private/all", ensureLogin, viewAll)
router.get("/private/contact", ensureLogin, contactView)
router.post("/private/contact", ensureLogin, contactProcess)

module.exports = router;