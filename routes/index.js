const { getRounds } = require('bcrypt');
const express = require('express');
const router  = express.Router();
const { viewAboutMe } = require("../controller/about");

const { signupView,
  signupProcess,
  loginView,
  loginProcess,
  logout  } = require("../controller/auth");

  const { viewAll,
    contactView,
    contactProcess,
    viewUnoimg,
    viewDosimg,
    viewTresimg,
    viewCuatroimg,
    viewCincoimg,
    viewSeisimg,
    viewSieteimg,
    viewOchoimg,
    viewNueveimg,
    viewDiezimg,
    viewOnceimg,
    vieDoceimg,
    viewTreceimg,
    viewCatrceimg,
    viewQuinceimg,
    viewDieciseisimg,
    viewDiecisieteimg,
    viewDieciochoimg,
    viewDiecinueveimg,
    viewVeinteimg,
    viewVeintiunoimg,
    viewVeintidosimg,
    viewVeintitresimg,
    viewVeinticuatroimg,
    viewVeinticincoimg,
    viewVeintiseisimg  } = require("../controller/allview")
const { ensureLogin } = require("../middleware/index")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/*about*/
router.get("/about/about", viewAboutMe)


/*auth*/
/*signup*/ 
router.get("/auth/signup", signupView)
router.post("/auth/signup", signupProcess)
/*login*/
router.get("/auth/login", loginView ) 
router.post("/auth/login", loginProcess)
/*logout*/  
router.get("/logout", logout) 


/*private*/
router.get("/private/all", ensureLogin, viewAll)
router.get("/private/contact",  contactView)
router.post("/private/contact",  contactProcess) 

/*img detail*/
router.get("/private/uno", viewUnoimg)
router.get("/private/dos", viewDosimg)
router.get("/private/tres", viewTresimg)
router.get("/private/cuatro", viewCuatroimg)
router.get("/private/cinco", viewCincoimg)
router.get("/private/seis", viewSeisimg)
router.get("/private/siete", viewSieteimg)
router.get("/private/ocho", viewOchoimg)
router.get("/private/nueve", viewNueveimg)
router.get("/private/diez", viewDiezimg)
router.get("/private/once", viewOnceimg)
router.get("/private/doce", vieDoceimg)
router.get("/private/trece", viewTreceimg)
router.get("/private/catrce", viewCatrceimg)
router.get("/private/quince", viewQuinceimg)
router.get("/private/dieciseis",  viewDieciseisimg )
router.get("/private/diecisiete",  viewDiecisieteimg )
router.get("/private/dieciocho",  viewDieciochoimg )
router.get("/private/diecinueve",  viewDiecinueveimg )
router.get("/private/veinte",  viewVeinteimg )
router.get("/private/veintiuno",  viewVeintiunoimg )
router.get("/private/veintidos",  viewVeintidosimg )
router.get("/private/veintitres",  viewVeintitresimg )
router.get("/private/veinticuatro",  viewVeinticuatroimg )
router.get("/private/veinticinco",  viewVeinticincoimg )
router.get("/private/veintiseis",  viewVeintiseisimg )

module.exports = router;
