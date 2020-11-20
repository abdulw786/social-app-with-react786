const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require ("dotenv");
dotenv.config();

//db
// mongoose.connect(process.env.MONGO_URI)
// .then (() => console.log('db connected!')) 

// mongoose.connection.on('error', err => {
//     console.log(`DB connection error : ${err.message}`);
// })




// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('DB connected')
// })
// .catch(err => console.log(err))


//connect to db youtube way
const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    });
    console.log("db connected")
}
connectDB();

//bring in routes 
const getRouters = require('./routes/post');
 

//my own middleware
const myOwnMiddleware = (req,res, next) => {
    console.log("middleware appaied!!!");
    next();
}
 // midlleware
app.use(morgan("dev"));
app.use(myOwnMiddleware); 


app.use('/', getRouters);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`A Node JS API listening on port: ${port}`)});




