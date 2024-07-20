const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    mobileNumber:{
        type: Number,
        required: true,
        trim: true,
        
        
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String
    }
});

module.exports = mongoose.model('crud', employeeSchema);
