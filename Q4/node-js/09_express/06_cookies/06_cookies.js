const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie('myFirstCookie', 'Looks Good');
    res.send('Cookies...!');        // check in browser document.cookie
});

app.get('/clearCookie', function (req, res) {
    res.clearCookie('myFirstCookie');
    res.send('Cookies Removed');
});

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});