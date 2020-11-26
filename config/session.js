const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

module.exports = app => {
	app.use(
		session({
			secret : process.env.SECRET,
			saveUninitialized : true,
			resave : false,
			cookie : {maxAge : 6000},
			store : new MongoStore({
				mongooseConnection : mongoose.connection,
				ttl : 60 * 60 *24,
			}) 
		})
	)
}