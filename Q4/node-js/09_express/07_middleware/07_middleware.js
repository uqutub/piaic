const express = require('express');

const app = express();

function log(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

function secondMiddleware(req, res, next) {
    console.log('Second Middileware');
    next();
}

app.get('/', log, secondMiddleware, function (req, res) {
    res.send('Express Works');
});

app.get('/error', function (req, res, next) {
    throw new Error('Testing Err');
});

function notDefineRoute(req, res, next) {
    res.send('404 not Found');
}
app.use(notDefineRoute);


function errorHandler(err, req, res, next) {
    if(err) {
        res.send('Errror: ' + err)
    }
}
app.use(errorHandler);


app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});