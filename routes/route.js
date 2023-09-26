// const { check } = require("-validator");
const router = require("express").Router()
const adminController = require("../controller/admin");
const authen = require("../controller/auth/authen");
// const isAuth = require('../middlewares/isAuth');
// const isAdmin = require('../middlewares/isAdmin');
const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// const jwt = require("jsonwebtoken");
// const dataJson = require("../Data/data.json");
// const Users = require("../modal/users");
// const axios = require("axios")
const multer = require("multer")

const Store = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, '/public/images')
  },
   filename: (req, files, cb) =>{
    cb(null, Date.now() + "-pic-"  + files.originalname);
   }
})

const upload = multer({storage:Store})

router.post("/register-page",authen.register);

router.post("/activation", authen.activation);

router.post("/login-page", authen.login);

router.post('/forget-password',authen.forgetPassword);

router.post('/retrive-password',authen.retrivePassword);

router.post('/update-cars',adminController.updateCars);

router.post('/update-password',authen.updatePassword);

router.post("/cars/data",adminController.datajson);

// router.get("/",adminController.HomePage);

router.get("/google/callback",passport.authenticate('google',{failureRedirect:"https://gart-racing.netlify.app"}),authen.googleCallback)

// router.get("/failed",authen.failed);

// router.get('/protected',authen.protected);




router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}),authen.googleAuth);

router.post('/register/car',upload.fields([{name: 'images', maxCount:8},{name: 'videos', maxCount:2}]),adminController.Registercars);

// router.get('/register/car',,adminController.Registercar);

// router.post("/nyname",(req,res)=>{
//     res.send({firstName:"Usman",lastName:"Abdulrahmon"})
// })

// router.get("/thisigup",(req,res)=>{
//     res.send("Sign up")
// })
// router.get("/this",isAdmin,(req,res)=>{
//     res.send("ghdsvdsvsdvhdfvhfvhfdkhfd")
// })

// router.get('/forgot-password',authen.forgotPassword);

// router.get("/dashboard",(req,res)=>{
//     res.redirect("https://gart-racing.netlify.app/dashboard")
// })



module.exports = router;
