const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const register = require("userRegisterData")

const app = express()
app.use(express.json())
app.use(cors())

// connect mongodb

mongoose.connect("mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log("DB Connected"))
.catch((err)=>console.log(err.message))



// check server running or not
app.get("/",(req,res)=>{
    res.send("Welcome to pabjobs server API'S")

})

app.post("/signup",(req,res)=>{
    const user =req.body
    console.log(user)

})

app.listen(3032,()=>{
    console.log("Server running at 3005");
})

