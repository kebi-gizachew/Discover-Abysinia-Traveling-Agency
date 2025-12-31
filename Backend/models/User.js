const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{String,
    required:true,
    minlength:8
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=moongose.model('User',userSchema)