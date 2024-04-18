const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();



try{
    mongoose.connect("mongodb://127.0.0.1:27017/twtter-clone");
    // mongoose.connect(`mongodb+srv://${process.env.DATABASE_UASER}:${process.env.DATABASE_PASSWORD}@cluster0.lxfgpo0.mongodb.net/twetter?retryWrites=true&w=majority`);

    console.log('database connectiong');
}catch(error){
    console.log('database connecting error');
}