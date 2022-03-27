const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send('Express Works');
});

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});