const User = require("../models/User");
const Message = require("../models/Message")

exports.viewAll = (req,res)=>{
	if(req.session.user){
		res.render("private/all")
	}else{
		return res.render("auth/login", {message : "Tienes que loguear!"})
	}
}

exports.contactView = (req, res)=>{
	if(req.session.user){
		res.render("private/contact")
	}else{
		return res.render("auth/login")
	}
}

exports.contactProcess = async(req,res)=>{
	const {title, context} = req.body;
	if( title==="" || context==="" ){
		return res.render("/private/contact", {message : "Te faltan los datos!"})
	}
	const newMessage = await Message.create({
		title,
		context,
		creator : req.session.user,
	})
	console.log(newMessage)
	res.redirect("/private/all")
}