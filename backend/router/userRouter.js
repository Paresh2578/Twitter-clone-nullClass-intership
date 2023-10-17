const express = require('express');
const cors = require('cors')

const UserRouter = express.Router();
UserRouter.use(cors());
UserRouter.use(express.json());



//model
const User = require('../db/model/userModel');



UserRouter.post('/register' , async(req , resp)=>{
     try{
        let data =  new User(req.body);
        let result = await data.save();
        resp.send(result);
     }catch(error){
        resp.send({status : "error"});
     }
})

UserRouter.get('/user', async(req, resp) => {
   try{
    let result =await User.find();
     resp.send(result);
   }catch(error){
    resp.send({status : "error"});
   }
});

UserRouter.get('/loggedInUser', async(req, resp) => {
   try{
      const email = req.query.email;
      console.log(email);
    let result =(await User.findOne({email : email}));
   //  let result =await User.find({email : email})
    resp.send(result);
   }catch(error){
    resp.send({status : "error"});
   }
});

module.exports = UserRouter;

