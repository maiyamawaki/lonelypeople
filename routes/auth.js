const express = require('express');
const router  = express.Router();
const { signupView,
				signupProcess,
				loginView,
				loginProcess,
				profileView  } = require("../controller/auth");


/*signup*/ 
router.get("/auth/signup", signupView)
router.post("/auth/signup", signupProcess)
/*login*/
router.get("/auth/login", loginView ) 
router.post("/auth/login", loginProcess)
/*profile*/
router.get("/auth/profile", profileView) 

module.exports = router;