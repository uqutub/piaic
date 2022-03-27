const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Express Works');
});

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});