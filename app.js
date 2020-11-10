// const {sum} = require ("./helpers"); 

// const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.end("hello from node JS, I was born today!");
// })
// server.listen(30)
// const total = sum(2,208);
// console.log("TOTAL",  total);
// console.log('http://localhost:30');


//express 
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send("hey whats up from express, this is Wahid!!!, expess is so much fun");
// });
// app.listen(3000);



const fs = require('fs');
const fileName = "target.txt";

const errHander = err => console.log(err);
const dataHander = data => console.log(data.toString());

fs.readFile(fileName, (err, data) =>  {
    if(err){
        errHander(err)
       
    }
    dataHander(data);
})
console.log("node js async programming .. ?")




