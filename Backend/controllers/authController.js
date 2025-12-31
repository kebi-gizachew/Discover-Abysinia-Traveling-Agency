const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')


const signup = async(req,res)=>{
    try{
        const {email , password} = req.body
        if(!email || !password) return res.status(400).json({
            success:true,
            message:'Email and password are requried'
        })
        if(password.length < 8 ) return res.status(400).json({
            success:false,
            message:'Password must be at least 8 character'
        })
        const existUser = await User.findOne({email})
        if(existUser){
             return res.status(400).json({
                success:false,
                message:'User already exists'
             })
        }
        const hashedPwd = await bcrypt.hash(password,10)
        const user = new User({email,password:hashedPwd})
        await user.save()

        const token = jwt.sign(
            {userId :user._id,email:user.email},
            process.env.JWT_SECRET_KEY,
            {expiresIn:'7d'}
        )
        res.status(201).json({
            success:true,
            message:'User created successfully',
            token,
            user:{
                id:user._id,
                email:user.email
            }
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

const login = async(req,res)=>{
    try{
        const { email , password} = req.body
        if(!email || !password) return res.status(400).json({
            success:false,
            message:'Email and password are required'
        })
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({
            success:false,
            message:'Invalid Credentials'
        })
        const checkPwd = await bcrypt.compare(password,user.password)
        if(!checkPwd) return res.status(400).json({
            success:false,
            message:"Invalid Credentials"
        })
        const token = jwt.sign(
            {userId:user._id,email:user.email},
            process.env.JWT_SECRET_KEY,
            {expiresIn:'7d'}
        )
        res.status(200).json({
            success:true,
            message:'User successfully logged in',
            token,
            user:{
                id:user._id,
                email:user.email
            }
        })
}catch(err){
        res.status(500).json({
            success:false,
            message:`Internal Server Error`
        })
}
}

module.exports= {signup , login}