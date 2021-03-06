const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const config = require("./../config.json"); // Configuration Files Containes Connection Details With Database & Some Security KEYS

const crypto = require("crypto");
const uuid = require("uuid");



// const LoginUserModel = require("./../Models/LoginUser");
// var x = LoginUserModel({email:""})
const secret = config.SECRET_KEY;
function getHashPassword(plainPassword){
   return crypto.createHmac('sha256', secret)
                   .update(plainPassword)
                   .digest('hex');
}
// const hash = getHashPassword('GoogleUser');
// console.log(hash);


router.post("/register",(req,res)=>{
    let {email,password,name,phone } = req.body;
    try{
        if(email.length > 10 && phone.length == 10 && password.length >= 6 && name.length >= 3){
            password = getHashPassword(password);
            let UserModel = require("./../Models/UserModel");
            let User = new UserModel({name:name,phone:phone,email:email,password:password});
            UserModel.countDocuments({phone:phone},(err,users)=>{
                if(users == 0){
                    User.save().then(doc=>{
                        res.status(201).json({isRegistered:true,doc})
                    })
                }else{
                    res.status(400).json({
                        error:"User Phone Already Exists"
                    })
                }
            })
            
        }else{
            throw ["Email is invalid","Phone Number is not 10 digit","password must be greater than 6","Name May be Invalid"]
        }
    }catch(error){
        res.status(400).json({
            statusCode:400,
            error:error
        });

    }
})

module.exports = router;
