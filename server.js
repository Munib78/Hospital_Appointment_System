const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/hospital_appointment",{useNewUrlParser : true});
const app = express ();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.json());

const patient_schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    address:{
        type: String,
        required:true
    },
    mobile:{
        type:Number,
        required: true
    },
    email : {
        type:String,
        unique:[true,"email is already taken"],
        required: true
        
    },
   
});

const patient = mongoose.model('Patient',patient_schema);


const doctor_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    department:{
        type: String,
        required: true
    },

    experience:{
        type: String,
        required: true
    },

    degree:{
        type: String,
        required: true
    },

    fees:{
        type: Number,
        required: true
    },

    service:{
        type: String,
        //required: true
    },

    time_slot:{
        type: Date,
       // required: true
    }
});

const doctor = mongoose.model('Doctor',doctor_schema)

const appointment_schema = new mongoose.Schema({
    patient_id:{type: mongoose.Schema.Types.ObjectId,ref:"Patient"},
    
    doctor_id: {type: mongoose.Schema.Types.ObjectId,ref:"Doctor"},

    slot: {
        type: Date,
        requred: true
    },

    date:{
        type: Date,
        required: true
    },

    status: {
        type: String,
        requred: true
    }
});

const appointment = mongoose.model("Appointment",appointment_schema);

app.listen(3000);


