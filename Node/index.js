const express= require('express')
const boydparser = require('body-parser')
const mongoose = require('mongoose')
const locationroutes = require('./routes/Location')
const cors = require('cors')

const app=express();
const PORT=8989;
const Mongo_URI='mongodb://localhost/zomato';

mongoose.connect(Mongo_URI,()=>{
    console.log('Connection with MongoDB is sucessful !');
},error=>console.log(error))

const routes=require('./routes/Restaurant')
app.use(cors())
app.use(boydparser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use("/",routes)
app.use("/location",locationroutes)
app.listen(PORT,()=>{console.log(`The server is started on the port no: ${PORT}`);})