
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const MongoClient = require('mongodb').MongoClient



const app = express ();
app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());
mongoose.connect("mongodb/localhost:27017/");



// app.get("/",function(req,res){ res.send("<h1> Hello World </h1>")})
// app.get("/home", function(req, res) {
//     res.send(__dirname+ "home.html");
// })
// app.get("/about", function(req, res) {
//     res.send(__dirname+ "home.html");
// })
// app.get("/contact", function(req, res) {
//     res.send(__dirname+ "home.html");
// })
// app.get("/ngo/:name", function(req, res) {
//     res.send(__dirname+ "ngopage.html");
// })
// app.get("/news", function(req,res) {
//     res.send(__dirname+"news.html");
// })

// app.listen(3000,()=> {console.log("Server started at port 3000")});