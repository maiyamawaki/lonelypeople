const User = require("../models/User");
const bcrypt = require("bcrypt");

/*Signup*/ 
exports.signupView = (req, res)=>{
	res.render("auth/signup")
}
exports.signupProcess = async(req, res)=>{
	const {username, email, password} = req.body;
	if(username === "" || email === "" || password === ""){
		return res.render("auth/signup", {message : "Te faltan los datos..."})
	}
	const existingUser = await User.findOne({$or:[{email}, {username}]});
	if(existingUser){
		return res.render("auth/signup", {message : "El nombre de usuario o el correo electronico ya esta en uso..."})
	}
	const salt = bcrypt.genSaltSync(12);
	const hashPass = bcrypt.hashSync(password, salt);
	const newUser = await User.create({
		username,
		email,
		password : hashPass,
	})
	console.log(newUser)
	res.redirect("/auth/login")
}

/*login*/
exports.loginView = (req, res)=>{
	res.render("auth/login")
}

exports.loginProcess = async(req, res)=>{
	const {email, password} = req.body;
	if(email === "" || password === ""){
		return res.render("auth/login", {message : "Te faltan los datos..."})
	}
	const existingUser = await User.findOne({email});
	if(!existingUser){
		return res.render("auth/login", {message : "Parece que aun no estas registrado!"})
	}
	if(bcrypt.compareSync(password,existingUser.password)){
		req.session.user = existingUser;
		console.log(req.session.user)
		res.redirect("/auth/profile")
	}else{
		return res.render("auth/login", {message : "La contraseña esta equivocada."})
	}
}

/*profile*/
exports.profileView = (req, res)=>{
	if(req.session.user){
		res.render("auth/profile", req.session.user)
	}else{
		res.render("auth/login")
	}
} 