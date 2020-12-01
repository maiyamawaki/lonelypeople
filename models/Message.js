const {Schema, model} = require("mongoose");

const messageSchema = new Schema({
	title : {
		type : String,
		required : true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	context : {
		type : String,
		required : true,
	}
})

module.exports = model("Message", messageSchema);