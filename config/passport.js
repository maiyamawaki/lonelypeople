const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { compareSync } = require("bcrypt");
const User = require("../models/User");

passport.use(
	new LocalStrategy(
		{
			usernameField : "email",
			passwordField : "password",
		},
		async ( email, password, done ) => {
			try {
				const user = await User.findOne({email})
				if(!user){
					return done(null, false, { message : "Incorrect your email. "})
				}
				if(!compareSync(password, user.password)){
					return done(null, false, {message : "Password is incorrect. "})
				}
				done(null, user)
			} catch (error){
				console.log(error);
				done(error)
			}
		}
	)
)

passport.serializeUser((user,done)=>{
  done(null, user._id)
})

passport.deserializeUser( async (id, done) => {
  try{
    const {email,username} =  await User.findById(id)
    done(null, {email, username})
  }catch(error){
    done(error)
  }
})

module.exports=passport