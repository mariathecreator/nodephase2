import express from "express";
import mongoose from "mongoose";

import route from './route.js'

const app=express()

app.use(express.json())

const uri='mongodb://127.0.0.1:27017/postman'

mongoose.connect(uri)
.then(()=>{
    console.log('sucess');
})
.catch((err)=>{
    console.log(err);
})

app.use(route)

app.listen(3000,()=>{
    console.log("server listening at http://localhost:3000")
})