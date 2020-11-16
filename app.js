const express = require('express');
const app = express();
const morgan = require("morgan");

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

const port = 3000;
app.listen(port, () => { console.log(`A Node JS API listening on port: ${port}`)});




