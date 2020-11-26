const User = require("../models/User");

exports.viewDetail1 = (req,res)=>{
	if(req.session.user){
		res.render("detail/detail1", req.session.user);
	}else{
		res.render("auth/login", {message : "Logueate, por favor!"})
	}
}