var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));


var todoArray = [{
    id: 1,
    name: 'Name 1'
}];

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home Page',
        todos: todoArray,
    });
});

app.post('/addTodo', function (req, res) {
    todoArray.push({
        id: Date.now(),
        name: req.body.task 
    })
    res.redirect('/');
});

app.get('/todo/:id', function (req, res) {
    res.send('Id ' + req.params.id)
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About Page',
    });
});


app.listen(3000);

console.log('Server started on port 3000');

module.exports = app;