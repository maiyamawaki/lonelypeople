const User = require("../models/User");
const Message = require("../models/Message")

exports.viewAll = (req,res)=>{
		res.render("private/all")
}

exports.contactView = (req, res)=>{
		res.render("private/contact")
}

exports.contactProcess = async(req,res)=>{
	const {title, context} = req.body;
	if( title===" " || context===" " ){
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

exports.viewUnoimg = (req,res)=>{
	res.render("private/uno")
}
exports.viewDosimg = (req,res)=>{
	res.render("private/dos")
}
exports.viewTresimg = (req,res)=>{
	res.render("private/tres")
}
exports.viewCuatroimg = (req,res)=>{
	res.render("private/cuatro")
}
exports.viewCincoimg = (req,res)=>{
	res.render("private/cinco")
}
exports.viewSeisimg = (req,res)=>{
	res.render("private/seis")
}
exports.viewSieteimg = (req,res)=>{
	res.render("private/siete")
}
exports.viewOchoimg = (req,res)=>{
	res.render("private/ocho")
}
exports.viewNueveimg = (req,res)=>{
	res.render("private/nueve")
}
exports.viewDiezimg = (req,res)=>{
	res.render("private/diez")
}
exports.viewOnceimg = (req,res)=>{
	res.render("private/once")
}
exports.vieDoceimg = (req,res)=>{
	res.render("private/doce")
}
exports.viewTreceimg = (req,res)=>{
	res.render("private/trece")
}
exports.viewCatrceimg = (req,res)=>{
	res.render("private/catrce")
}
exports.viewQuinceimg = (req,res)=>{
	res.render("private/quince")
}
exports.viewDieciseisimg = (req,res)=>{
	res.render("private/dieciseis")
}
exports.viewDiecisieteimg = (req,res)=>{
	res.render("private/diecisiete")
}
exports.viewDieciochoimg = (req,res)=>{
	res.render("private/dieciocho")
}
exports.viewDiecinueveimg = (req,res)=>{
	res.render("private/diecinueve")
}
exports.viewVeinteimg = (req,res)=>{
	res.render("private/veinte")
}
exports.viewVeintiunoimg = (req,res)=>{
	res.render("private/veintiuno")
}
exports.viewVeintidosimg = (req,res)=>{
	res.render("private/veintidos")
}
exports.viewVeintitresimg = (req,res)=>{
	res.render("private/veintitres")
}
exports.viewVeinticuatroimg = (req,res)=>{
	res.render("private/veinticuatro")
}
exports.viewVeinticincoimg = (req,res)=>{
	res.render("private/veinticinco")
}
exports.viewVeintiseisimg = (req,res)=>{
	res.render("private/veintiseis")
}