const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./register");
// const register = require("userRegisterData")

const app = express()
app.use(express.json())
app.use(cors())

// connect mongodb

mongoose.connect("mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log("DB Connected"))
    .catch((err) => console.log(err.message))




// check server running or not
app.get("/", (req, res) => {
    res.send("Welcome to pabjobs server API'S")

})


// send users datails on mongodb
app.post("/signup", async (req, res) => {

    try {

        const user = await userData.findOne({ email: req.body.email })

        console.log(user);

        if (!user) {

            const newUser = {
                typeOfRegistration: req.body.typeOfRegistration,
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                mobileNumber: req.body.mobileNumber,
                gender: req.body.gender,
            }
            const userDetails = await userData.create(newUser)//posting to collections or model data base
            console.log(userDetails);

            res.status(200).send("User created successfully")

        } else {
            res.status(402).json("User allready register")

        }



    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: e.message })
    }


})

//get users datails on mongodb

app.get("/allusers", async (req, res) => {
    const allusers = await userData.find()

    res.status(200).send(allusers)
})

//get single user details
app.get("/user/:id", async(req,res)=>{
    const {id} =req.params

    const user = await userData.findById({_id: id})

    if(!user){
        res.status(400).json("User Not Found")
    }
    res.status(200).json(user)
})

//update perticular user data

app.put("/user/:id", async(req,res)=>{
    const {id} = req.params
    const user = await userData.findByIdAndUpdate(id, req.body)

    if(!user){
        res.status(400).json("User Not Found")
    }
    res.status(200).json("users data updated successfully")
})

app.listen(4005, () => {
    console.log("Server running at 4005");
})



