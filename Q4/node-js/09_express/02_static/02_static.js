const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

// static folder
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('Express Works');
});

app.get('/users', function (req, res) {
    res.json([{id: 1, name: 'John'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Amenda'}]);
});

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});