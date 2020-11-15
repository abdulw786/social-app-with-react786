const express = require('express');
const app = express();
const morgan = require("morgan");

const getRoute = require('./routes/post')



app.get('/', getRoute.getPost)

const port = 3000;
app.listen(port, () => { console.log(`A Node JS API listening on port: ${port}`)});




