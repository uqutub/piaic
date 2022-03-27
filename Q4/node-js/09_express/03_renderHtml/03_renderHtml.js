const express = require('express');
// const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

// static folder
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
    // res.sendFile('welcome.html', {root: path.join(__dirname, './pages')});
});

app.get('/users', function (req, res) {
    res.json([{id: 1, name: 'John'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Amenda'}]);
});

app.get('*', function (req, res) {
    res.send('What Exactly you want?');
});


app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});