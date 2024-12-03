const app = require('./app');
const express = require('express');
const cors = require('cors');
const port = 3001;
const hostname = 'localhost'; 
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin:1234@cluster0.030a0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log('MongoDB connection error: ',error);
    }
}

connect();

const server = app.listen(port, hostname, () => {
    console.log(`Server is running on http://${server.address().port}`);
})

app.use('/api', router);