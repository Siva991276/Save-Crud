const mongoose = require("mongoose")

const userRegisterData = new mongoose.Schema({

    typeOfRegistration: {
        type: String,
        require: true
    },

    fullname: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    mobileNumber: {
        type: Number,
        require: true
    },

    gender: {
        type: String,
        require: true
    }

}
)

module.exports = mongoose.model("userRegisterData",Schema);