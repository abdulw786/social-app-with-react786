const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("hey whats up from express, this is Wahid!!!, expess is so much fun");
});
app.listen(3000);




