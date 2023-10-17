const express = require('express');
const mongoose = require('mongoose');

try{
    mongoose.connect("mongodb://127.0.0.1:27017/twtter-clone");
    console.log('database connectiong');
}catch(error){
    console.log('database connecting error');
}