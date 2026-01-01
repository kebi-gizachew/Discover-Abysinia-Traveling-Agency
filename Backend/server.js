const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const cookieParser= require('cookie-parser')
const PORT = process.env.PORT ||5000
const authRoute = require('../Backend/routes/authRoute')
dotenv.config()

app.use(cors({
    origin:' http://localhost:5173',
    credentials:true
}
))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("MongoDB connection error:",err))

app.use('/api/auth',authRoute)

app.listen(PORT,()=>console.log(`Server is running on https://localhost:${PORT}`))