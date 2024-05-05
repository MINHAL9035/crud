const express = require("express");
const userRoute = express();

userRoute.set("view engine", "ejs");
userRoute.set("views", "./views/user"); 

const userController=require('../controller/userController')

userRoute.get('/',userController.loadLogin)
userRoute.get('/signUp',userController.loadSignUp)








module.exports = userRoute; 