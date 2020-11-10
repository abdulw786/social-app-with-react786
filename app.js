const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("hey whats up from express, this is Wahid!!!, expess is so much fun");
});

const port = 3000;
app.listen(port, () => { `A Node JS API listening on port: ${port}`});




