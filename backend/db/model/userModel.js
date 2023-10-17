const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        userName: {
            type : String,
            require : true,
        },
         name:{
            type : String,
         },
          email: {
            type : String,
            require : true
          },
         password: {
            type : String,
            require : true
          },
          profileImage : String,
          coverImage : String,
          bio : String,
          location : String,
          website : String,
          dob : String,

        }
      )

 module.exports = mongoose.model("users" , userSchema);
