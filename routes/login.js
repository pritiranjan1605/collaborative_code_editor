const express = require('express');
const user = require('../models/user')
const router = express.Router();

router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.post('/signup',async (req,res)=>{
    const  {fname,email,password} = req.body
    if(!fname || !email || !password){
        return res.render("signup",{
            error:"all credentialas are required"
        })
    }
    else{
        const users = await user.create({fname,email,password});
        console.log(users)
        return res.render('login')
    }
    
})
router.get('/login',(req,res)=>{
    return res.render('login')
    
})
router.post('/login',async(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        return res.render("login",{
            error:"all credentialas are required"
        })
    }else{
        const users = await user.findOne({email,password})
        if(!users){
            return res.render('login',{
                error:"no such user exist"
            })
        }else{
            return res.render('home')
        }
    }
})
module.exports=router;