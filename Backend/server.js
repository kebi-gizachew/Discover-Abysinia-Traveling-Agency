const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ||5000
dotenv.config()

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("MongoDB connection error:",err))



app.listen(PORT,()=>console.log(`Server is running on https://localhost:${PORT}`))