const User = require("../models/User")

exports.ensureLogin = (req, res, next) => {
	if(req.user) next();
	else res.redirect("/auth/login")
}