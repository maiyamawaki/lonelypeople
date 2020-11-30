const User = require("../models/User");

exports.viewAll = (req,res)=>{
	if(req.session.user){
		res.render("private/all")
	}else{
		return res.render("auth/login", {message : "Tienes que loguear!"})
	}
}
