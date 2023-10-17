const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

//database connecting
require('./db/.config.js')


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4500 || process.env.PORT;


//router
const postRouter = require('./router/postRouter.js');
const userRouter = require('./router/userRouter.js');

//post
app.use('/post', postRouter);

//user
app.use('/user' ,userRouter);

app.listen(PORT , ()=>{
     console.log(`tWitter server start on : ${PORT}`);
})