const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
/*Signup*/ 
exports.signupView = (req, res)=>{
	res.render("auth/signup")
}
exports.signupProcess = async(req, res)=>{
	const {username, email, password} = req.body;
	if(username === "" || email === "" || password === ""){
		return res.render("auth/signup", {message : "You are missing the data"})
	}
	const existingUser = await User.findOne({$or:[{email}, {username}]});
	if(existingUser){
		return res.render("auth/signup", {message : "The username or email is already in use"})
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

exports.loginProcess = passport.authenticate("local", {
	successRedirect : "/private/all",
	failureRedirect : "/auth/login",
})

/*logout*/
exports.logout = (req,res) => {
	req.logout();
	res.redirect("/")
} 