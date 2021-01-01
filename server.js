import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import api from './server/routes/api'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/space", {useNewUrlParser:true ,useCreateIndex:true, useUnifiedTopology: true})
mongoose.connection.on('connected' , ()=>{
console.log("MongoDB connection successfully established!" )
})

app.use(express.static('public'))


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api' , api)




app.listen(port , ()=>{
  console.log(`Express is running on port ${port}`)
})
