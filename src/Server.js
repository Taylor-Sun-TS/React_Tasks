const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('public'));
app.use("/dist", express.static('dist'));

app.get("/hello", function(req, res) {
    res.send("hello world");
});

app.listen(9001, function(){
    console.log('listening port 9001');
});
